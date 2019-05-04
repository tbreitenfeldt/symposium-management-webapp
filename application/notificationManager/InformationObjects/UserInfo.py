

class UserInfo:
    def __init__(self, userId, userName, phoneNumber, emailAddress, phoneCarrier, notifyByEmail, notifyByPhone):
        self._userId = None
        self._userName = None
        self._phoneNumber = None
        self._emailAddress = None
        self._phoneCarrier = None
        self._notifyByEmail = None
        self._notifyByPhone = None
        self.setAll(userId, userName, phoneNumber, emailAddress, phoneCarrier, notifyByEmail, notifyByPhone)

    @property
    def user_id(self):
        return self._userId
    
    @user_id.setter
    def user_id(self, userId):
        self._userId = userId

    @property
    def user_name(self):
        return self._userName
    
    @user_name.setter
    def user_name(self, userName):
        self._userName = userName

    @property
    def phone_number(self):
        return self._phoneNumber
    
    @phone_number.setter
    def phone_number(self, phoneNumber):
        if len(phoneNumber) == 0:
            self._phoneNumber = False
        else:
            self._phoneNumber = phoneNumber

    @property
    def email_address(self):
        return self._emailAddress
    
    @email_address.setter
    def email_address(self, emailAddress):
        if len(emailAddress) == 0:
            self._emailAddress = False
        else:
            self._emailAddress = emailAddress

    @property
    def phone_carrier(self):
        return self._phoneCarrier
    
    @phone_carrier.setter
    def phone_carrier(self, phoneCarrier):
        if len(phoneCarrier) == 0:
            self._phoneCarrier = False
        else:
            self._phoneCarrier = phoneCarrier

    @property
    def notify_by_email(self):
        return self._notifyByEmail
    
    @notify_by_email.setter
    def notify_by_email(self, notifyByEmail):
        if notifyByEmail == 0:
            self._notifyByEmail = False
        else:
            self._notifyByEmail = True

    @property
    def notify_by_phone(self):
        return self._notifyByPhone
    
    @notify_by_phone.setter
    def notify_by_phone(self, notifyByPhone):
        if notifyByPhone == 0:
            self._notifyByPhone = False
        else:
            self._notifyByPhone = True

    def setAll(self, userId, userName, phoneNumber, emailAddress, phoneCarrier, notifyByEmail, notifyByPhone):
        self.user_id = userId
        self.user_name = userName
        self.phone_number = phoneNumber
        self.email_address = emailAddress
        self.phone_carrier = phoneCarrier
        self.notify_by_email = notifyByEmail
        self.notify_by_phone = notifyByPhone

    def __eq__(self, other):
        return self.user_id == other.user_id

    def __str__(self):
        return "UserInfo -> userId: {}, userName: {}, phoneNumber: {}, emailAddress: {}, phoneCarrier: {}, notifyByEmail: {}, notfiyByPhone: {}".format(\
            self.user_id, self.user_name, self.phone_number, self.email_address, self.phone_carrier, self.notify_by_email, self.notify_by_phone)