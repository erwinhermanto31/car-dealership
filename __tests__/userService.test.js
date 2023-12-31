const UserService = require('../src/services/userService');
const { User } = require('../src/models');

jest.mock('../src/models', () => ({
  User: {
    findOne: jest.fn(),
    create: jest.fn(),
  },
}));

describe('UserService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should register a new user', async () => {
    User.findOne.mockResolvedValue(null);
    User.create.mockResolvedValue({ id: 1, name: 'John Doe', email: 'john.doe@example.com' });

    const newUser = await UserService.registerUser('John Doe', 'john.doe@example.com');

    expect(newUser).toEqual({ id: 1, name: 'John Doe', email: 'john.doe@example.com' });
    expect(User.findOne).toHaveBeenCalledWith({ where: { email: 'john.doe@example.com' } });
    expect(User.create).toHaveBeenCalledWith({ name: 'John Doe', email: 'john.doe@example.com' });
  });

  it('should throw an error if email is already registered', async () => {
    User.findOne.mockResolvedValue({ id: 1, name: 'Existing User', email: 'john.doe@example.com' });

    await expect(UserService.registerUser('John Doe', 'john.doe@example.com')).rejects.toThrow('Email is already registered');
    expect(User.create).not.toHaveBeenCalled();
  });

  // Add more test cases based on your business rules
});
