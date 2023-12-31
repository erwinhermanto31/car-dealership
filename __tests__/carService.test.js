const CarService = require('../src/services/carService');
const { Car, User } = require('../src/models');

jest.mock('../src/models', () => ({
  Car: {
    findOne: jest.fn(),
    create: jest.fn(),
  },
  User: {
    findByPk: jest.fn(),
  },
}));

describe('CarService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should record a new car for a user', async () => {
    User.findByPk.mockResolvedValue({ id: 1, name: 'John Doe', email: 'john.doe@example.com' });
    Car.findOne.mockResolvedValue(null);
    Car.create.mockResolvedValue({ id: 1, user_id: 1, type: 'Sedan', color: 'Blue' });

    const newCar = await CarService.recordCar(1, 'Sedan', 'Blue');

    expect(newCar).toEqual({ id: 1, user_id: 1, type: 'Sedan', color: 'Blue' });
    expect(User.findByPk).toHaveBeenCalledWith(1);
    expect(Car.findOne).toHaveBeenCalledWith({ where: { user_id: 1, type: 'Sedan', color: 'Blue' } });
    expect(Car.create).toHaveBeenCalledWith({ user_id: 1, type: 'Sedan', color: 'Blue' });
  });

  it('should throw an error if user does not exist', async () => {
    User.findByPk.mockResolvedValue(null);

    await expect(CarService.recordCar(1, 'Sedan', 'Blue')).rejects.toThrow('User not found');
    expect(Car.findOne).not.toHaveBeenCalled();
    expect(Car.create).not.toHaveBeenCalled();
  });

  // Add more test cases based on your business rules
});
