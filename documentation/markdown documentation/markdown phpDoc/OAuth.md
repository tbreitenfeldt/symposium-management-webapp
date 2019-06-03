

#

# OAuth.php Documentation

### `namespace PHPMailer\PHPMailer`

PHPMailer - PHP email creation and transport class. PHP Version 5.5.

 * **See also:** https://github.com/PHPMailer/PHPMailer/ The PHPMailer GitHub project

     <p>
 * **Author:**
   * Marcus Bointon (Synchro/coolbru) <phpmailer@synchromedia.co.uk>
   * Jim Jagielski (jimjag) <jimjag@gmail.com>
   * Andy Prevost (codeworxtech) <codeworxtech@users.sourceforge.net>
   * Brent R. Matzelle (original founder)
 * **Copyright:**
   * 2012 - 2015 Marcus Bointon
   * 2010 - 2012 Jim Jagielski
   * 2004 - 2009 Andy Prevost
 * **License:** http://www.gnu.org/copyleft/lesser.html GNU Lesser General Public License

### `class OAuth`

OAuth - OAuth2 authentication wrapper class. Uses the oauth2-client package from the League of Extraordinary Packages.

 * **See also:** http://oauth2-client.thephpleague.com

     <p>
 * **Author:** Marcus Bointon (Synchro/coolbru) <phpmailer@synchromedia.co.uk>

### `protected $provider`

An instance of the League OAuth Client Provider.

 * **Type:** `AbstractProvider` — 

### `protected $oauthToken`

The current OAuth access token.

 * **Type:** `AccessToken` — 

### `protected $oauthUserEmail = ''`

The user's email address, usually used as the login ID and also the from address when sending email.

 * **Type:** `string` — 

### `protected $oauthClientSecret = ''`

The client secret, generated in the app definition of the service you're connecting to.

 * **Type:** `string` — 

### `protected $oauthClientId = ''`

The client ID, generated in the app definition of the service you're connecting to.

 * **Type:** `string` — 

### `protected $oauthRefreshToken = ''`

The refresh token, used to obtain new AccessTokens.

 * **Type:** `string` — 

### `public function __construct($options)`

OAuth constructor.

 * **Parameters:** `$options` — `array` — Associative array containing

     `provider`, `userName`, `clientSecret`, `clientId` and `refreshToken` elements

### `protected function getGrant()`

Get a new RefreshToken.

 * **Returns:** `RefreshToken` — 

### `protected function getToken()`

Get a new AccessToken.

 * **Returns:** `AccessToken` — 

### `public function getOauth64()`

Generate a base64-encoded OAuth token.

 * **Returns:** `string` — 
