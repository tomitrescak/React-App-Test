import UserModel from './User';

declare global {
  namespace App {
    interface Context {
      user: UserModel;
    }
  }
}

export default function (conn: any) {
  const user = new UserModel(conn, 'user');
  user.fixtures();

  return {
    user
  };
};
