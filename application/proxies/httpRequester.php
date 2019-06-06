<?php
/**
 * source: 
 * https://stackoverflow.com/questions/5647461/how-do-i-send-a-post-request-with-php
*/


/**
 * The global constant that defines the URL path to the location of the main directory of the project.
*/
//define("DOMAIN", "http://pacificwesterndisabilitystudies.tk");
//define("DOMAIN", "http://localhost/dashboard/github/symposium-management-webapp/application");
//define("DOMAIN", "http://localhost/symposium-management-webapp-master/application");
define("DOMAIN", "http://localhost/symposium-management-webapp/application");


/**
 * This class is taken from the programming form stack overflow.<br>
 * source:
 * https://stackoverflow.com/questions/5647461/how-do-i-send-a-post-request-with-php<br>
 * This is a wrapper for curl for making get, post, put, and delete calls to an API.
*/
class HTTPRequester {
    /**
     * Make HTTP-GET call
     *
     * @param string $url - The url to target with your HTTP request.
     * @param array $params - The array of arguments that are to be passed along with the request.
     * @return      HTTP-Response body or an empty string if the request fails or is empty
     */
    public static function HTTPGet($url, array $params) {
        $query = http_build_query($params); 
        $ch    = curl_init($url.'?'.$query);
        curl_setopt($ch, CURLOPT_COOKIE,session_name().'='.session_id());  //setup to allow for targeted page to access the same session    
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, false);
        $response = curl_exec($ch);
        curl_close($ch);
        return $response;
    }
    /**
     * Make HTTP-POST call
     *
     * @param string $url - The url to target with your HTTP request.
     * @param array $params - The array of arguments that are to be passed along with the request.
     * @return      HTTP-Response body or an empty string if the request fails or is empty
     */
    public static function HTTPPost($url, array $params) {
        $query = http_build_query($params);
        $ch    = curl_init();
        curl_setopt($ch, CURLOPT_COOKIE,session_name().'='.session_id());  //setup to allow for targeted page to access the same session 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $query);
        $response = curl_exec($ch);
        curl_close($ch);
        return $response;
    }
    /**
     * Make HTTP-PUT call
     *
     * @param string $url - The url to target with your HTTP request.
     * @param array $params - The array of arguments that are to be passed along with the request.
     * @return      HTTP-Response body or an empty string if the request fails or is empty
     */
    public static function HTTPPut($url, array $params) {
        $query = http_build_query($params);
        $ch    = curl_init();
        curl_setopt($ch, CURLOPT_COOKIE,session_name().'='.session_id());  //setup to allow for targeted page to access the same session  
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        curl_setopt($ch, CURLOPT_POSTFIELDS, $query);
        $response = curl_exec($ch);
        curl_close($ch);
        return $response;
    }
    /**
     * Make HTTP-DELETE call
     *
     * @param string $url - The url to target with your HTTP request.
     * @param array $params - The array of arguments that are to be passed along with the request.
     * @return   HTTP-Response body or an empty string if the request fails or is empty
     */
    public static function HTTPDelete($url, array $params) {
        $query = http_build_query($params);
        $ch    = \curl_init();
        curl_setopt($ch, CURLOPT_COOKIE,session_name().'='.session_id());  //setup to allow for targeted page to access the same session  
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
        curl_setopt($ch, CURLOPT_POSTFIELDS, $query);
        $response = curl_exec($ch);
        curl_close($ch);
        return $response;
    }
}
?>