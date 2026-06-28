import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { UserService } from './services/user/user.service';

describe('AppController', () => {
  let appController: AppController;
  const userServiceMock = {
    getUsers: jest.fn().mockReturnValue([]),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{ provide: UserService, useValue: userServiceMock }],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('user flow', () => {
    it('should return a success message when adding a user', () => {
      expect(appController.addUser()).toEqual({
        message: 'User added successfully',
      });
    });

    it('should return users from the user service', () => {
      expect(appController.allUsers()).toEqual([]);
      expect(userServiceMock.getUsers).toHaveBeenCalled();
    });
  });
});
