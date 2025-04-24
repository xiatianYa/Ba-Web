const local: App.I18n.Schema = {
  system: {
    title: 'SoybeanAdmin',
    updateTitle: 'System Version Update Notification',
    updateContent: 'A new version of the system has been detected. Do you want to refresh the page immediately?',
    updateConfirm: 'Refresh immediately',
    updateCancel: 'Later'
  },
  common: {
    action: 'Action',
    add: 'Add',
    addSuccess: 'Add Success',
    backToHome: 'Back to home',
    batchDelete: 'Batch Delete',
    cancel: 'Cancel',
    close: 'Close',
    check: 'Check',
    expandColumn: 'Expand Column',
    columnSetting: 'Column Setting',
    config: 'Config',
    confirm: 'Confirm',
    delete: 'Delete',
    deleteSuccess: 'Delete Success',
    confirmDelete: 'Are you sure you want to delete?',
    edit: 'Edit',
    warning: 'Warning',
    error: 'Error',
    index: 'Index',
    keywordSearch: 'Please enter keyword',
    logout: 'Logout',
    logoutConfirm: 'Are you sure you want to log out?',
    lookForward: 'Coming soon',
    modify: 'Modify',
    modifySuccess: 'Modify Success',
    noData: 'No Data',
    operate: 'Operate',
    pleaseCheckValue: 'Please check whether the value is valid',
    refresh: 'Refresh',
    reset: 'Reset',
    search: 'Search',
    switch: 'Switch',
    tip: 'Tip',
    trigger: 'Trigger',
    update: 'Update',
    updateSuccess: 'Update Success',
    userCenter: 'User Center',
    yesOrNo: {
      yes: 'Yes',
      no: 'No'
    }
  },
  request: {
    logout: 'Logout user after request failed',
    logoutMsg: 'User status is invalid, please log in again',
    logoutWithModal: 'Pop up modal after request failed and then log out user',
    logoutWithModalMsg: 'User status is invalid, please log in again',
    refreshToken: 'The requested token has expired, refresh the token',
    tokenExpired: 'The requested token has expired'
  },
  theme: {
    themeSchema: {
      title: 'Theme Schema',
      light: 'Light',
      dark: 'Dark',
      auto: 'Follow System'
    },
    grayscale: 'Grayscale',
    colourWeakness: 'Colour Weakness',
    layoutMode: {
      title: 'Layout Mode',
      vertical: 'Vertical Menu Mode',
      horizontal: 'Horizontal Menu Mode',
      'vertical-mix': 'Vertical Mix Menu Mode',
      'horizontal-mix': 'Horizontal Mix menu Mode',
      reverseHorizontalMix: 'Reverse first level menus and child level menus position'
    },
    recommendColor: 'Apply Recommended Color Algorithm',
    recommendColorDesc: 'The recommended color algorithm refers to',
    themeColor: {
      title: 'Theme Color',
      primary: 'Primary',
      info: 'Info',
      success: 'Success',
      warning: 'Warning',
      error: 'Error',
      followPrimary: 'Follow Primary'
    },
    scrollMode: {
      title: 'Scroll Mode',
      wrapper: 'Wrapper',
      content: 'Content'
    },
    page: {
      animate: 'Page Animate',
      mode: {
        title: 'Page Animate Mode',
        fade: 'Fade',
        'fade-slide': 'Slide',
        'fade-bottom': 'Fade Zoom',
        'fade-scale': 'Fade Scale',
        'zoom-fade': 'Zoom Fade',
        'zoom-out': 'Zoom Out',
        none: 'None'
      }
    },
    fixedHeaderAndTab: 'Fixed Header And Tab',
    header: {
      height: 'Header Height',
      breadcrumb: {
        visible: 'Breadcrumb Visible',
        showIcon: 'Breadcrumb Icon Visible'
      },
      multilingual: {
        visible: 'Display multilingual button'
      }
    },
    tab: {
      visible: 'Tab Visible',
      cache: 'Tag Bar Info Cache',
      height: 'Tab Height',
      mode: {
        title: 'Tab Mode',
        chrome: 'Chrome',
        button: 'Button'
      }
    },
    sider: {
      inverted: 'Dark Sider',
      width: 'Sider Width',
      collapsedWidth: 'Sider Collapsed Width',
      mixWidth: 'Mix Sider Width',
      mixCollapsedWidth: 'Mix Sider Collapse Width',
      mixChildMenuWidth: 'Mix Child Menu Width'
    },
    footer: {
      visible: 'Footer Visible',
      fixed: 'Fixed Footer',
      height: 'Footer Height',
      right: 'Right Footer'
    },
    watermark: {
      visible: 'Watermark Full Screen Visible',
      text: 'Watermark Text'
    },
    themeDrawerTitle: 'Theme Configuration',
    pageFunTitle: 'Page Function',
    resetCacheStrategy: {
      title: 'Reset Cache Strategy',
      close: 'Close Page',
      refresh: 'Refresh Page'
    },
    configOperation: {
      copyConfig: 'Copy Config',
      copySuccessMsg: 'Copy Success, Please replace the variable "themeSettings" in "src/theme/settings.ts"',
      resetConfig: 'Reset Config',
      resetSuccessMsg: 'Reset Success'
    }
  },
  route: {
    login: 'Login',
    403: 'No Permission',
    404: 'Page Not Found',
    500: 'Server Error',
    'iframe-page': 'Iframe',
    home: 'Home',
    manage: 'Manage',
    manage_user: 'Manage User',
    manage_role: 'Manage Role',
    manage_menu: 'Manage Menu',
    manage_dict: 'Manage Dict',
    monitor: 'Monitor',
    monitor_logs: 'Monitor Logs',
    monitor_logs_file: 'Monitor File Logs',
    monitor_logs_operation: '操作日志'
  },
  page: {
    login: {
      common: {
        loginOrRegister: 'Login / Register',
        userNamePlaceholder: 'Please enter user name',
        phonePlaceholder: 'Please enter phone number',
        codePlaceholder: 'Please enter verification code',
        passwordPlaceholder: 'Please enter password',
        confirmPasswordPlaceholder: 'Please enter password again',
        codeLogin: 'Verification code login',
        confirm: 'Confirm',
        back: 'Back',
        validateSuccess: 'Verification passed',
        loginSuccess: 'Login successfully',
        welcomeBack: 'Welcome back, {userName} !',
        avatarPlaceholder: 'Please enter avatar',
        userNickNamePlaceholder: 'Please enter user nick name',
        getCodePlaceholder: 'Please enter get code',
        registerSuccess: 'Register successfully'
      },
      pwdLogin: {
        title: 'Password Login',
        rememberMe: 'Remember me',
        forgetPassword: 'Forget password?',
        register: 'Register',
        otherAccountLogin: 'Other Account Login',
        otherLoginMode: 'Other Login Mode',
        qq: 'QQ Login'
      },
      codeLogin: {
        title: 'Verification Code Login',
        getCode: 'Get verification code',
        reGetCode: 'Reacquire after {time}s',
        sendCodeSuccess: 'Verification code sent successfully',
        imageCodePlaceholder: 'Please enter image verification code'
      },
      register: {
        title: 'Register',
        agreement: 'I have read and agree to',
        protocol: '《User Agreement》',
        policy: '《Privacy Policy》'
      },
      resetPwd: {
        title: 'Reset Password'
      },
      bindWeChat: {
        title: 'Bind WeChat'
      }
    },
    home: {
      branchDesc:
        'For the convenience of everyone in developing and updating the merge, we have streamlined the code of the main branch, only retaining the homepage menu, and the rest of the content has been moved to the example branch for maintenance. The preview address displays the content of the example branch.',
      greeting: 'Good morning, {userName}, today is another day full of vitality!',
      weatherDesc: 'Today is cloudy to clear, 20℃ - 25℃!',
      projectCount: 'Project Count',
      todo: 'Todo',
      message: 'Message',
      downloadCount: 'Download Count',
      registerCount: 'Register Count',
      schedule: 'Work and rest Schedule',
      study: 'Study',
      work: 'Work',
      rest: 'Rest',
      entertainment: 'Entertainment',
      visitCount: 'Visit Count',
      turnover: 'Turnover',
      dealCount: 'Deal Count',
      projectNews: {
        title: 'Project News',
        moreNews: 'More News',
        desc1: 'Soybean created the open source project soybean-admin on May 28, 2021!',
        desc2: 'Yanbowe submitted a bug to soybean-admin, the multi-tab bar will not adapt.',
        desc3: 'Soybean is ready to do sufficient preparation for the release of soybean-admin!',
        desc4: 'Soybean is busy writing project documentation for soybean-admin!',
        desc5: 'Soybean just wrote some of the workbench pages casually, and it was enough to see!'
      },
      creativity: 'Creativity'
    },
    manage: {
      common: {
        status: {
          enable: 'Enable',
          disable: 'Disable'
        }
      },
      role: {
        title: 'Role List',
        roleName: 'Role Name',
        roleCode: 'Role Code',
        roleDesc: 'Role Description',
        form: {
          roleName: 'Please enter role name',
          roleCode: 'Please enter role code',
          roleDesc: 'Please enter role description'
        },
        addRole: 'Add Role',
        editRole: 'Edit Role',
        menuAuth: 'Menu Auth',
        buttonAuth: 'Button Auth'
      },
      user: {
        title: 'User List',
        userName: 'User Name',
        password: 'Password',
        userGender: 'User Gender',
        nickName: 'Nick Name',
        userPhone: 'User Phone',
        userEmail: 'User Email',
        userStatus: 'User Status',
        userRole: 'User Role',
        form: {
          userName: 'Please enter user name',
          password: 'Please enter password',
          userGender: 'Please select user gender',
          nickName: 'Please enter nick name',
          userPhone: 'Please enter user phone',
          userEmail: 'Please enter user email',
          userStatus: 'Please select user status',
          userRole: 'Please select user role'
        },
        addUser: 'Add User',
        editUser: 'Edit User',
        gender: {
          unknown: 'Unknown',
          male: 'Male',
          female: 'Female'
        }
      },
      menu: {
        home: 'Home',
        title: 'Menu List',
        id: 'Menu ID',
        parentId: 'Parent ID',
        menuType: 'Menu Type',
        menuName: 'Menu Name',
        routeName: 'Route Name',
        routePath: 'Route Path',
        pathParam: 'Path Param',
        layout: 'Layout',
        page: 'Page',
        i18nKey: 'I18n Key',
        icon: 'Icon',
        localIcon: 'Local Icon',
        iconTypeTitle: 'Icon Type',
        order: 'Order',
        constant: 'Constant',
        keepAlive: 'Keep Alive',
        href: 'Href',
        hideInMenu: 'Hide In Menu',
        activeMenu: 'Active Menu',
        multiTab: 'Multi Tab',
        fixedIndexInTab: 'Fixed Index In Tab',
        query: 'Query',
        button: 'Button',
        buttonCode: 'Button Code',
        buttonDesc: 'Button Description',
        menuStatus: 'Menu Status',
        form: {
          home: 'Please select home',
          menuType: 'Please select menu type',
          menuName: 'Please enter menu name',
          routeName: 'Please enter route name',
          routePath: 'Please enter route path',
          pathParam: 'Please enter path param',
          layout: 'Please select layout',
          page: 'Please select page',
          i18nKey: 'Please enter i18n key',
          icon: 'Please enter icon',
          localIcon: 'Please enter local icon',
          order: 'Please enter order',
          keepAlive: 'Please select keep alive',
          href: 'Please enter href',
          hideInMenu: 'Please select hide in menu',
          activeMenu: 'Please select active menu',
          multiTab: 'Please select multi tab',
          fixedInTab: 'Please select fixed in tab',
          fixedIndexInTab: 'Please enter fixed index in tab',
          queryKey: 'Please enter query key',
          queryValue: 'Please enter query value',
          button: 'Please select button',
          buttonCode: 'Please enter button code',
          buttonDesc: 'Please enter button description',
          menuStatus: 'Please select menu status'
        },
        addMenu: 'Add Menu',
        editMenu: 'Edit Menu',
        addChildMenu: 'Add Child Menu',
        type: {
          directory: 'Directory',
          menu: 'Menu'
        },
        iconType: {
          iconify: 'Iconify',
          local: 'Local'
        }
      },
      dict: {
        title: 'Dict List',
        name: 'Dict Name',
        code: 'Dict Code',
        type: 'Dict Type',
        sort: 'Sort',
        description: 'Description',
        status: 'Status',
        form: {
          name: 'Please enter name',
          code: 'Please enter code',
          type: 'Please select type',
          sort: 'Please enter sort',
          description: 'Please enter description',
          status: 'Please select status'
        },
        addDict: 'Add Dict',
        editDict: 'Edit Dict',
        dictType: {
          system: 'System',
          business: 'Business'
        },
        loadCacheSuccess: 'Load cache successfully',
        selectTreeIsEmptyTip: 'The select tree is empty',
        systemFieldsCannotBeDeleted: 'System fields cannot be deleted'
      },
      dictItem: {
        title: 'Dict Item List',
        dictCode: 'Dict Code',
        value: 'Value',
        zhCN: 'Chinese',
        enUS: 'English',
        sort: 'Sort',
        type: 'Type',
        color: 'Color',
        description: 'Description',
        status: 'Status',
        form: {
          value: 'Please enter value',
          zhCN: 'Please enter Chinese',
          enUS: 'Please enter English',
          sort: 'Please enter sort',
          type: 'Please select type',
          color: 'Please enter color',
          description: 'Please enter description',
          status: 'Please select status'
        },
        addDictItem: 'Add Dict Item',
        editDictItem: 'Edit Dict Item'
      }
    },
    tools: {
      common: {
        renderType: {
          input: 'Input',
          select: 'Select',
          radio: 'Radio'
        },
        searchType: {
          equal: 'Equal',
          noEqual: 'Not equal',
          like: 'Like',
          leftLike: 'Left like',
          rightLike: 'Right like',
          greaterThan: 'Greater than',
          greaterThanOrEqual: 'Greater than or equal to',
          lessThan: 'Less than',
          lessThanOrEqual: 'Less than or equal to',
          in: 'In',
          notIn: 'Not in',
          between: 'Between',
          notBetween: 'Not between'
        }
      }
    },
    userCenter: {
      userInfo: {
        userName: 'User Name',
        userAvatar: 'User Avatar',
        password: 'Password',
        nickName: 'Nick Name',
        phone: 'Phone',
        email: 'Email',
        gender: 'Gender',
        communityPreference: 'Community Preference',
        modePreference: 'Mode Preference',
        personalInfo: 'Personal Info',
        changePassword: 'Change Password',
        gameConfig: 'Game Config',
        basicInfo: 'Basic Info',
        edit: 'Edit',
        oldPassword: 'Old Password',
        newPassword: 'New Password',
        confirmPassword: 'Confirm Password',
        restartUserName: 'Restart User Name',
        restartUserNameConfirm: 'Restart User Name Confirm',
        form: {
          userName: 'Please enter user name',
          userAvatar: 'Please enter user avatar',
          password: 'Please enter password',
          communityPreferencePlaceholder: 'Please select community preference',
          modePreferencePlaceholder: 'Please select mode preference',
          oldPasswordPlaceholder: 'Please enter old password',
          newPasswordPlaceholder: 'Please enter new password',
          confirmPasswordPlaceholder: 'Please enter confirm password'
        }
      }
    },
    monitor: {
      logs: {
        file: {
          userId: 'User ID',
          userName: 'User Name',
          fileUrl: 'File URL',
          filePath: 'File Path',
          fileType: 'File Type',
          fileSize: 'File Size',
          errorMsg: 'Error Message',
          status: 'Status',
          form: {
            userId: 'Please enter user ID',
            userName: 'Please enter user name',
            fileUrl: 'Please enter file URL',
            filePath: 'Please enter file path',
            fileType: 'Please enter file type',
            fileSize: 'Please enter file size',
            status: 'Please select status'
          }
        },
        operation: {
          createUser: 'Operation User',
          timestamp: 'Operation Time',
          requestId: 'Request ID',
          ip: 'Operation IP',
          ipAddr: 'IP Location',
          userAgent: 'User-Agent',
          requestUri: 'Request URI',
          requestMethod: 'Request Method',
          contentType: 'Content Type',
          methodName: 'Method Name',
          operation: 'Operation',
          methodParams: 'Method Params',
          useTime: 'Use Time(ms)',
          createTime: 'Operation Time',
          form: {
            createUser: 'Please enter operation user',
            timestamp: 'Please select operation time'
          }
        }
      }
    }
  },
  form: {
    required: 'Cannot be empty',
    userName: {
      required: 'Please enter user name',
      invalid: 'User name format is incorrect'
    },
    phone: {
      required: 'Please enter phone number',
      invalid: 'Phone number format is incorrect'
    },
    pwd: {
      required: 'Please enter password',
      invalid: '6-18 characters, including letters, numbers, and underscores'
    },
    confirmPwd: {
      required: 'Please enter password again',
      invalid: 'The two passwords are inconsistent'
    },
    code: {
      required: 'Please enter verification code',
      invalid: 'Verification code format is incorrect'
    },
    email: {
      required: 'Please enter email',
      invalid: 'Email format is incorrect'
    }
  },
  dropdown: {
    closeCurrent: 'Close Current',
    closeOther: 'Close Other',
    closeLeft: 'Close Left',
    closeRight: 'Close Right',
    closeAll: 'Close All'
  },
  icon: {
    themeConfig: 'Theme Configuration',
    themeSchema: 'Theme Schema',
    lang: 'Switch Language',
    fullscreen: 'Fullscreen',
    fullscreenExit: 'Exit Fullscreen',
    reload: 'Reload Page',
    collapse: 'Collapse Menu',
    expand: 'Expand Menu',
    pin: 'Pin',
    unpin: 'Unpin'
  },
  datatable: {
    itemCount: 'Total {total} items'
  }
};

export default local;
