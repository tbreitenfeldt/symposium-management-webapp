

#

# POP3.php Documentation

### `namespace PHPMailer\PHPMailer`

PHPMailer POP-Before-SMTP Authentication Class. PHP Version 5.5.

 * **See also:** https://github.com/PHPMailer/PHPMailer/ The PHPMailer GitHub project

     <p>
 * **Author:**
   * Marcus Bointon (Synchro/coolbru) <phpmailer@synchromedia.co.uk>
   * Jim Jagielski (jimjag) <jimjag@gmail.com>
   * Andy Prevost (codeworxtech) <codeworxtech@users.sourceforge.net>
   * Brent R. Matzelle (original founder)
 * **Copyright:**
   * 2012 - 2017 Marcus Bointon
   * 2010 - 2012 Jim Jagielski
   * 2004 - 2009 Andy Prevost
 * **License:** http://www.gnu.org/copyleft/lesser.html GNU Lesser General Public License

### `class POP3`

PHPMailer POP-Before-SMTP Authentication Class. Specifically for PHPMailer to use for RFC1939 POP-before-SMTP authentication. 1) This class does not support APOP authentication. 2) Opening and closing lots of POP3 connections can be quite slow. If you need to send a batch of emails then just perform the authentication once at the start, and then loop through your mail sending script. Providing this process doesn't take longer than the verification period lasts on your POP3 server, you should be fine. 3) This is really ancient technology; you should only need to use it to talk to very old systems. 4) This POP3 class is deliberately lightweight and incomplete, and implements just enough to do authentication. If you want a more complete class there are other POP3 classes for PHP available.

 * **Author:**
   * Richard Davey (original author) <rich@corephp.co.uk>
   * Marcus Bointon (Synchro/coolbru) <phpmailer@synchromedia.co.uk>
   * Jim Jagielski (jimjag) <jimjag@gmail.com>
   * Andy Prevost (codeworxtech) <codeworxtech@users.sourceforge.net>

### `const VERSION = '6.0.7'`

The POP3 PHPMailer Version number.

 * **Type:** `string` — 

### `const DEFAULT_PORT = 110`

Default POP3 port number.

 * **Type:** `int` — 

### `const DEFAULT_TIMEOUT = 30`

Default timeout in seconds.

 * **Type:** `int` — 

### `public $do_debug = 0`

Debug display level. Options: 0 = no, 1+ = yes.

 * **Type:** `int` — 

### `public $host`

POP3 mail server hostname.

 * **Type:** `string` — 

### `public $port`

POP3 port number.

 * **Type:** `int` — 

### `public $tval`

POP3 Timeout Value in seconds.

 * **Type:** `int` — 

### `public $username`

POP3 username.

 * **Type:** `string` — 

### `public $password`

POP3 password.

 * **Type:** `string` — 

### `protected $pop_conn`

Resource handle for the POP3 connection socket.

 * **Type:** `resource` — 

### `protected $connected = false`

Are we connected?

 * **Type:** `bool` — 

### `protected $errors = []`

Error container.

 * **Type:** `array` — 

### `const LE = "\r\n"`

Line break constant.

### `public static function popBeforeSmtp(  $host,  $port = false,  $timeout = false,  $username = '',  $password = '',  $debug_level = 0  )`

Simple static wrapper for all-in-one POP before SMTP.

 * **Parameters:**
   * `$host` — `string` — The hostname to connect to
   * `$port` — `int|bool` — The port number to connect to
   * `$timeout` — `int|bool` — The timeout value
   * `$username` — `string` — 
   * `$password` — `string` — 
   * `$debug_level` — `int` — <p>
 * **Returns:** `bool` — 

### `public function authorise($host, $port = false, $timeout = false, $username = '', $password = '', $debug_level = 0)`

Authenticate with a POP3 server. A connect, login, disconnect sequence appropriate for POP-before SMTP authorisation.

 * **Parameters:**
   * `$host` — `string` — The hostname to connect to
   * `$port` — `int|bool` — The port number to connect to
   * `$timeout` — `int|bool` — The timeout value
   * `$username` — `string` — 
   * `$password` — `string` — 
   * `$debug_level` — `int` — <p>
 * **Returns:** `bool` — 

### `public function connect($host, $port = false, $tval = 30)`

Connect to a POP3 server.

 * **Parameters:**
   * `$host` — `string` — 
   * `$port` — `int|bool` — 
   * `$tval` — `int` — <p>
 * **Returns:** `bool` — 

### `public function login($username = '', $password = '')`

Log in to the POP3 server. Does not support APOP (RFC 2828, 4949).

 * **Parameters:**
   * `$username` — `string` — 
   * `$password` — `string` — <p>
 * **Returns:** `bool` — 

### `public function disconnect()`

Disconnect from the POP3 server.

### `protected function getResponse($size = 128)`

Get a response from the POP3 server.

 * **Parameters:** `$size` — `int` — The maximum number of bytes to retrieve

     <p>
 * **Returns:** `string` — 

### `protected function sendString($string)`

Send raw data to the POP3 server.

 * **Parameters:** `$string` — `string` — <p>
 * **Returns:** `int` — 

### `protected function checkResponse($string)`

Checks the POP3 server response. Looks for for +OK or -ERR.

 * **Parameters:** `$string` — `string` — <p>
 * **Returns:** `bool` — 

### `protected function setError($error)`

Add an error to the internal error store. Also display debug output if it's enabled.

 * **Parameters:** `$error` — `string` — 

### `public function getErrors()`

Get an array of error messages, if any.

 * **Returns:** `array` — 

### `protected function catchWarning($errno, $errstr, $errfile, $errline)`

POP3 connection error handler.

 * **Parameters:**
   * `$errno` — `int` — 
   * `$errstr` — `string` — 
   * `$errfile` — `string` — 
   * `$errline` — `int` — 
