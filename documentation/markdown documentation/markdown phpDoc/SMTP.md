

#

# SMTP.php Documentation

### `namespace PHPMailer\PHPMailer`

PHPMailer RFC821 SMTP email transport class. PHP Version 5.5.

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

### `class SMTP`

PHPMailer RFC821 SMTP email transport class. Implements RFC 821 SMTP commands and provides some utility methods for sending mail to an SMTP server.

 * **Author:**
   * Chris Ryan
   * Marcus Bointon <phpmailer@synchromedia.co.uk>

### `const VERSION = '6.0.7'`

The PHPMailer SMTP version number.

 * **Type:** `string` — 

### `const LE = "\r\n"`

SMTP line break constant.

 * **Type:** `string` — 

### `const DEFAULT_PORT = 25`

The SMTP port to use if one is not specified.

 * **Type:** `int` — 

### `const MAX_LINE_LENGTH = 998`

The maximum line length allowed by RFC 2822 section 2.1.1.

 * **Type:** `int` — 

### `const DEBUG_OFF = 0`

Debug level for no output.

### `const DEBUG_CLIENT = 1`

Debug level to show client -> server messages.

### `const DEBUG_SERVER = 2`

Debug level to show client -> server and server -> client messages.

### `const DEBUG_CONNECTION = 3`

Debug level to show connection status, client -> server and server -> client messages.

### `const DEBUG_LOWLEVEL = 4`

Debug level to show all messages.

### `public $do_debug = self::DEBUG_OFF`

Debug output level. Options: * self::DEBUG_OFF (`0`) No debug output, default * self::DEBUG_CLIENT (`1`) Client commands * self::DEBUG_SERVER (`2`) Client commands and server responses * self::DEBUG_CONNECTION (`3`) As DEBUG_SERVER plus connection status * self::DEBUG_LOWLEVEL (`4`) Low-level data output, all messages.

 * **Type:** `int` — 

### `public $Debugoutput = 'echo'`

How to handle debug output. Options: * `echo` Output plain-text as-is, appropriate for CLI * `html` Output escaped, line breaks converted to `<br>`, appropriate for browser output * `error_log` Output to error log as configured in php.ini Alternatively, you can provide a callable expecting two params: a message string and the debug level:

```php $smtp->Debugoutput = function($str, $level) {echo "debug level $level; message: $str";}; ```

Alternatively, you can pass in an instance of a PSR-3 compatible logger, though only `debug` level output is used:

```php $mail->Debugoutput = new myPsr3Logger; ```

 * **Type:** `string|callable|\Psr\Log\LoggerInterface` — 

### `public $do_verp = false`

Whether to use VERP.

 * **See also:**
   * http://en.wikipedia.org/wiki/Variable_envelope_return_path
   * http://www.postfix.org/VERP_README.html Info on VERP

     <p>
 * **Type:** `bool` — 

### `public $Timeout = 300`

The timeout value for connection, in seconds. Default of 5 minutes (300sec) is from RFC2821 section 4.5.3.2. This needs to be quite high to function correctly with hosts using greetdelay as an anti-spam measure.

 * **See also:** http://tools.ietf.org/html/rfc2821#section-4.5.3.2

     <p>
 * **Type:** `int` — 

### `public $Timelimit = 300`

How long to wait for commands to complete, in seconds. Default of 5 minutes (300sec) is from RFC2821 section 4.5.3.2.

 * **Type:** `int` — 

### `protected $smtp_transaction_id_patterns = [  'exim' => '`

Patterns to extract an SMTP transaction id from reply to a DATA command. The first capture group in each regex will be used as the ID. MS ESMTP returns the message ID, which may not be correct for internal tracking.

 * **Type:** `string[]` — 

### `protected $last_smtp_transaction_id`

The last transaction ID issued in response to a DATA command, if one was detected.

 * **Type:** `string|bool|null` — 

### `protected $smtp_conn`

The socket for the server connection.

 * **Type:** `?resource` — 

### `protected $error = [  'error' => '',  'detail' => '',  'smtp_code' => '',  'smtp_code_ex' => '',  ]`

Error information, if any, for the last SMTP command.

 * **Type:** `array` — 

### `protected $helo_rply = null`

The reply the server sent to us for HELO. If null, no HELO string has yet been received.

 * **Type:** `string|null` — 

### `protected $server_caps = null`

The set of SMTP extensions sent in reply to EHLO command. Indexes of the array are extension names. Value at index 'HELO' or 'EHLO' (according to command that was sent) represents the server name. In case of HELO it is the only element of the array. Other values can be boolean TRUE or an array containing extension options. If null, no HELO/EHLO string has yet been received.

 * **Type:** `array|null` — 

### `protected $last_reply = ''`

The most recent reply received from the server.

 * **Type:** `string` — 

### `protected function edebug($str, $level = 0)`

Output debugging info via a user-selected method.

 * **Parameters:**
   * `$str` — `string` — Debug string to output
   * `$level` — `int` — The debug level of this message; see DEBUG_* constants

     <p>
 * **See also:**
   * SMTP::$Debugoutput
   * SMTP::$do_debug

### `public function connect($host, $port = null, $timeout = 30, $options = [])`

Connect to an SMTP server.

 * **Parameters:**
   * `$host` — `string` — SMTP server IP or host name
   * `$port` — `int` — The port number to connect to
   * `$timeout` — `int` — How long to wait for the connection to open
   * `$options` — `array` — An array of options for stream_context_create()

     <p>
 * **Returns:** `bool` — 

### `public function startTLS()`

Initiate a TLS (encrypted) session.

 * **Returns:** `bool` — 

### `public function authenticate(  $username,  $password,  $authtype = null,  $OAuth = null  )`

Perform SMTP authentication. Must be run after hello().

 * **See also:** hello()

     <p>
 * **Parameters:**
   * `$username` — `string` — The user name
   * `$password` — `string` — The password
   * `$authtype` — `string` — The auth type (CRAM-MD5, PLAIN, LOGIN, XOAUTH2)
   * `$OAuth` — `OAuth` — An optional OAuth instance for XOAUTH2 authentication

     <p>
 * **Returns:** `bool` — True if successfully authenticated

### `protected function hmac($data, $key)`

Calculate an MD5 HMAC hash. Works like hash_hmac('md5', $data, $key) in case that function is not available.

 * **Parameters:**
   * `$data` — `string` — The data to hash
   * `$key` — `string` — The key to hash with

     <p>
 * **Returns:** `string` — 

### `public function connected()`

Check connection state.

 * **Returns:** `bool` — True if connected

### `public function close()`

Close the socket and clean up the state of the class. Don't use this function without first trying to use QUIT.

 * **See also:** quit()

### `public function data($msg_data)`

Send an SMTP DATA command. Issues a data command and sends the msg_data to the server, finializing the mail transaction. $msg_data is the message that is to be send with the headers. Each header needs to be on a single line followed by a <CRLF> with the message headers and the message body being separated by an additional <CRLF>. Implements RFC 821: DATA <CRLF>.

 * **Parameters:** `$msg_data` — `string` — Message data to send

     <p>
 * **Returns:** `bool` — 

### `public function hello($host = '')`

Send an SMTP HELO or EHLO command. Used to identify the sending server to the receiving server. This makes sure that client and server are in a known state. Implements RFC 821: HELO <SP> <domain> <CRLF> and RFC 2821 EHLO.

 * **Parameters:** `$host` — `string` — The host name or IP to connect to

     <p>
 * **Returns:** `bool` — 

### `protected function sendHello($hello, $host)`

Send an SMTP HELO or EHLO command. Low-level implementation used by hello().

 * **Parameters:**
   * `$hello` — `string` — The HELO string
   * `$host` — `string` — The hostname to say we are

     <p>
 * **Returns:** `bool` — <p>
 * **See also:** hello()

### `protected function parseHelloFields($type)`

Parse a reply to HELO/EHLO command to discover server extensions. In case of HELO, the only parameter that can be discovered is a server name.

 * **Parameters:** `$type` — `string` — `HELO` or `EHLO`

### `public function mail($from)`

Send an SMTP MAIL command. Starts a mail transaction from the email address specified in $from. Returns true if successful or false otherwise. If True the mail transaction is started and then one or more recipient commands may be called followed by a data command. Implements RFC 821: MAIL <SP> FROM:<reverse-path> <CRLF>.

 * **Parameters:** `$from` — `string` — Source address of this message

     <p>
 * **Returns:** `bool` — 

### `public function quit($close_on_error = true)`

Send an SMTP QUIT command. Closes the socket if there is no error or the $close_on_error argument is true. Implements from RFC 821: QUIT <CRLF>.

 * **Parameters:** `$close_on_error` — `bool` — Should the connection close if an error occurs?

     <p>
 * **Returns:** `bool` — 

### `public function recipient($address, $dsn = '')`

Send an SMTP RCPT command. Sets the TO argument to $toaddr. Returns true if the recipient was accepted false if it was rejected. Implements from RFC 821: RCPT <SP> TO:<forward-path> <CRLF>.

 * **Parameters:**
   * `$address` — `string` — The address the message is being sent to
   * `$dsn` — `string` — Comma separated list of DSN notifications. NEVER, SUCCESS, FAILURE

     or DELAY. If you specify NEVER all other notifications are ignored.

     <p>
 * **Returns:** `bool` — 

### `public function reset()`

Send an SMTP RSET command. Abort any transaction that is currently in progress. Implements RFC 821: RSET <CRLF>.

 * **Returns:** `bool` — True on success

### `protected function sendCommand($command, $commandstring, $expect)`

Send a command to an SMTP server and check its return code.

 * **Parameters:**
   * `$command` — `string` — The command name - not sent to the server
   * `$commandstring` — `string` — The actual command to send
   * `$expect` — `int|array` — One or more expected integer success codes

     <p>
 * **Returns:** `bool` — True on success

### `public function sendAndMail($from)`

Send an SMTP SAML command. Starts a mail transaction from the email address specified in $from. Returns true if successful or false otherwise. If True the mail transaction is started and then one or more recipient commands may be called followed by a data command. This command will send the message to the users terminal if they are logged in and send them an email. Implements RFC 821: SAML <SP> FROM:<reverse-path> <CRLF>.

 * **Parameters:** `$from` — `string` — The address the message is from

     <p>
 * **Returns:** `bool` — 

### `public function verify($name)`

Send an SMTP VRFY command.

 * **Parameters:** `$name` — `string` — The name to verify

     <p>
 * **Returns:** `bool` — 

### `public function noop()`

Send an SMTP NOOP command. Used to keep keep-alives alive, doesn't actually do anything.

 * **Returns:** `bool` — 

### `public function turn()`

Send an SMTP TURN command. This is an optional command for SMTP that this class does not support. This method is here to make the RFC821 Definition complete for this class and _may_ be implemented in future. Implements from RFC 821: TURN <CRLF>.

 * **Returns:** `bool` — 

### `public function client_send($data, $command = '')`

Send raw data to the server.

 * **Parameters:**
   * `$data` — `string` — The data to send
   * `$command` — `string` — Optionally, the command this is part of, used only for controlling debug output

     <p>
 * **Returns:** `int|bool` — The number of bytes sent to the server or false on error

### `public function getError()`

Get the latest error.

 * **Returns:** `array` — 

### `public function getServerExtList()`

Get SMTP extensions available on the server.

 * **Returns:** `array|null` — 

### `public function getServerExt($name)`

Get metadata about the SMTP server from its HELO/EHLO response. The method works in three ways, dependent on argument value and current state: 1. HELO/EHLO has not been sent - returns null and populates $this->error. 2. HELO has been sent - $name == 'HELO': returns server name $name == 'EHLO': returns boolean false $name == any other string: returns null and populates $this->error 3. EHLO has been sent - $name == 'HELO'|'EHLO': returns the server name $name == any other string: if extension $name exists, returns True or its options (e.g. AUTH mechanisms supported). Otherwise returns False.

 * **Parameters:** `$name` — `string` — Name of SMTP extension or 'HELO'|'EHLO'

     <p>
 * **Returns:** `mixed` — 

### `public function getLastReply()`

Get the last reply from the server.

 * **Returns:** `string` — 

### `protected function get_lines()`

Read the SMTP server's response. Either before eof or socket timeout occurs on the operation. With SMTP we can tell if we have more lines to read if the 4th character is '-' symbol. If it is a space then we don't need to read anything else.

 * **Returns:** `string` — 

### `public function setVerp($enabled = false)`

Enable or disable VERP address generation.

 * **Parameters:** `$enabled` — `bool` — 

### `public function getVerp()`

Get VERP address generation mode.

 * **Returns:** `bool` — 

### `protected function setError($message, $detail = '', $smtp_code = '', $smtp_code_ex = '')`

Set error messages and codes.

 * **Parameters:**
   * `$message` — `string` — The error message
   * `$detail` — `string` — Further detail on the error
   * `$smtp_code` — `string` — An associated SMTP error code
   * `$smtp_code_ex` — `string` — Extended SMTP code

### `public function setDebugOutput($method = 'echo')`

Set debug output method.

 * **Parameters:** `$method` — `string|callable` — The name of the mechanism to use for debugging output, or a callable to handle it

### `public function getDebugOutput()`

Get debug output method.

 * **Returns:** `string` — 

### `public function setDebugLevel($level = 0)`

Set debug output level.

 * **Parameters:** `$level` — `int` — 

### `public function getDebugLevel()`

Get debug output level.

 * **Returns:** `int` — 

### `public function setTimeout($timeout = 0)`

Set SMTP timeout.

 * **Parameters:** `$timeout` — `int` — The timeout duration in seconds

### `public function getTimeout()`

Get SMTP timeout.

 * **Returns:** `int` — 

### `protected function errorHandler($errno, $errmsg, $errfile = '', $errline = 0)`

Reports an error number and string.

 * **Parameters:**
   * `$errno` — `int` — The error number returned by PHP
   * `$errmsg` — `string` — The error message returned by PHP
   * `$errfile` — `string` — The file the error occurred in
   * `$errline` — `int` — The line number the error occurred on

### `protected function recordLastTransactionID()`

Extract and return the ID of the last SMTP transaction based on a list of patterns provided in SMTP::$smtp_transaction_id_patterns. Relies on the host providing the ID in response to a DATA command. If no reply has been received yet, it will return null. If no pattern was matched, it will return false.

 * **Returns:** `bool|null|string` — 

### `public function getLastTransactionID()`

Get the queue/transaction ID of the last SMTP transaction If no reply has been received yet, it will return null. If no pattern was matched, it will return false.

 * **Returns:** `bool|null|string` — <p>
 * **See also:** recordLastTransactionID()
