<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Auth\LoginService as LoginService;
use QCloud_WeApp_SDK\Constants as Constants;

class Swiper extends CI_Controller {
    public function index() {
            $arr = array(
                'imgUrls' => array(
                    'https://m.360buyimg.com/n12/jfs/t3436/30/553704070/134908/1162ad37/580d5dbfN7f63374d.jpg!q70.jpg',
                    'https://m.360buyimg.com/n12/jfs/t3784/181/531937683/210858/9023869c/580d5dc1N4613bb26.jpg!q70.jpg',
                    'https://m.360buyimg.com/n12/s750x750_jfs/t3415/353/519654269/140172/b7524c3a/580d5dc2N96dc3e1f.jpg!q70.jpg',
                    'https://m.360buyimg.com/n12/s750x750_jfs/t3802/312/543523402/130185/462716f/580d5dc3Na68f1f50.jpg!q70.jpg',
                    'https://m.360buyimg.com/n12/s750x750_jfs/t11728/220/889194780/105760/800fbaa7/59faaca6N24bce545.jpg!q70.jpg'
                ),
                'indicatorDots' => true,
                'autoplay' => true,
                'interval'=> 4000,
                'duration'=> 500
            );

            $this->json([
                'code' => 0,
                'data' => $arr
            ]);
    }
}
