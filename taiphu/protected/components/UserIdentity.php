<?php

/**
 * UserIdentity represents the data needed to identity a user.
 * It contains the authentication method that checks if the provided
 * data can identity the user.
 */
class UserIdentity extends CUserIdentity {

    private $id;

    public function getId() {
        return $this->id;
    }

    /**
     * Authenticates a user.
     * The example implementation makes sure if the username and password
     * are both 'demo'.
     * In practical applications, this should be changed to authenticate
     * against some persistent user identity storage (e.g. database).
     * @return boolean whether authentication succeeds.
     */
    public function authenticate() {
        $user = MUser::model()->find('username=:username', array(':username' => $this->username));
        if ($user) {
            if ($user->verifyPassword($this->password)) {
                $this->errorCode = self::ERROR_NONE;
                $this->setState('name', CHtml::encode($user->username));
                $this->id = $user->id;
                Yii::app()->session['logined'] = true;
            } else {
                $this->errorCode = self::ERROR_PASSWORD_INVALID;
            }
        } else {
            $this->errorCode = self::ERROR_USERNAME_INVALID;
        }
        return !$this->errorCode;
    }

}
