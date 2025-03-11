declare namespace Api {
  namespace Auth {
    interface LoginToken {
      token: string;
      refreshToken: string;
    }

    interface UserInfo {
      userId: string;
      userName: string;
      userPhone: string;
      userEmail: string;
      userGender: string;
      avatar: string;
      roles: string[];
      buttons: string[];
    }

    interface UserOneSelf {
      userName: string;
      userPhone: string;
      userEmail: string;
      userGender: string | null;
    }

    interface UserPassword {
      oldPassword: string;
      newPassword: string;
      confirmPassword: string;
    }

    interface UserRestart {
      userName: string;
      password: string;
    }
  }
}
