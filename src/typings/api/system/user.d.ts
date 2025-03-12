declare namespace Api {
  namespace UserManage {
    /** user */
    type User = Common.CommonRecord<{
      /** user name */
      userName: string;
      /** user password */
      password: string;
      /** user gender */
      userGender: UserGender | null;
      /** user nick name */
      nickName: string;
      /** user phone */
      userPhone: string;
      /** user email */
      userEmail: string;
      /** user role code collection */
      userRoles: string[];
      /** user status */
      status: Api.Common.EnableStatus;
    }>;

    /** userVo */
    type UserVo = {
      /** user name */
      userName: string;
      /** user avatar */
      userAvatar: string;
      /** user gender */
      userGender: UserGender | null;
      /** user nick name */
      nickName: string;
      /** user phone */
      userPhone: string;
      /** user email */
      userEmail: string;
      /** status */
      status: Api.Common.EnableStatus | null;
      /** user role code collection */
      userRoles: string[];
    };

    /** user password edit model */
    type UserPasswordVo = {
      oldPassword: string;
      newPassword: string;
      confirmPassword: string;
    };

    /** user info edit model */
    type UserInfoVo = {
      userName: string;
      password: string;
    };

    /**
     * user gender
     *
     * - "0": "unknown"
     * - "1": "male"
     * - "2": "female"
     */
    type UserGender = '0' | '1' | '2';

    /** user search params */
    type UserSearchParams = CommonType.RecordNullable<
      Pick<Api.UserManage.User, 'userName' | 'userGender' | 'nickName' | 'userPhone' | 'userEmail' | 'status'> &
        Api.Common.CommonSearchParams
    >;

    /** user list */
    type UserList = Common.PaginatingQueryRecord<User>;
  }
}
