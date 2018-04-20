<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Auth\LoginService as LoginService;
use QCloud_WeApp_SDK\Constants as Constants;

class Swiper extends CI_Controller {
    public function index() {
            $page = intval($_GET['page']) - 1;
            $page_size = 3;

            // list.
            $list =  array(
                array(
                    'id' => 1,
                    'name' => '超级核桃',
                    'img' => 'https://img30.360buyimg.com/popWareDetail/jfs/t3436/223/1624209025/58626/5d4dbef5/582c032dN5a48aa00.jpg',
                ),
                array(
                    'id' => 2,
                    'name' => '精品核桃',
                    'img' => 'https://img30.360buyimg.com/popWareDetail/jfs/t3436/223/1624209025/58626/5d4dbef5/582c032dN5a48aa00.jpg'
                ),
                array(
                    'id' => 3,
                    'name' => '樱桃核桃',
                    'img' => 'https://img30.360buyimg.com/popWareDetail/jfs/t3436/223/1624209025/58626/5d4dbef5/582c032dN5a48aa00.jpg'
                ),
                array(
                    'id' => 4,
                    'name' => '无敌核桃',
                    'img' => 'https://img30.360buyimg.com/popWareDetail/jfs/t3436/223/1624209025/58626/5d4dbef5/582c032dN5a48aa00.jpg'
                ),
                array(
                    'id' => 5,
                    'name' => '银杏核桃',
                    'img' => 'https://img30.360buyimg.com/popWareDetail/jfs/t3436/223/1624209025/58626/5d4dbef5/582c032dN5a48aa00.jpg'
                ),
                array(
                    'id' => 6,
                    'name' => '柳叶核桃',
                    'img' => 'https://img30.360buyimg.com/popWareDetail/jfs/t3436/223/1624209025/58626/5d4dbef5/582c032dN5a48aa00.jpg'
                ),
                array(
                    'id' => 7,
                    'name' => '柳叶核桃7',
                    'img' => 'https://img30.360buyimg.com/popWareDetail/jfs/t3436/223/1624209025/58626/5d4dbef5/582c032dN5a48aa00.jpg'
                ),
                array(
                    'id' => 8,
                    'name' => '柳叶核桃8',
                    'img' => 'https://img30.360buyimg.com/popWareDetail/jfs/t3436/223/1624209025/58626/5d4dbef5/582c032dN5a48aa00.jpg'
                ),
                array(
                    'id' => 9,
                    'name' => '柳叶核桃9',
                    'img' => 'https://img30.360buyimg.com/popWareDetail/jfs/t3436/223/1624209025/58626/5d4dbef5/582c032dN5a48aa00.jpg'
                ),
                array(
                    'id' => 10,
                    'name' => '柳叶核桃10',
                    'img' => 'https://img30.360buyimg.com/popWareDetail/jfs/t3436/223/1624209025/58626/5d4dbef5/582c032dN5a48aa00.jpg'
                )
            );

            // swiper.
            $arr = array(
                'swiper' => array(
                    'imgUrls' => array(
                        array(
                            'id' => '1',
                            'img' => 'https://m.360buyimg.com/n12/jfs/t3436/30/553704070/134908/1162ad37/580d5dbfN7f63374d.jpg!q70.jpg'
                        ),
                        array(
                            'id' => '2',
                            'img' => 'https://m.360buyimg.com/n12/jfs/t3784/181/531937683/210858/9023869c/580d5dc1N4613bb26.jpg!q70.jpg'
                        ),
                        array(
                            'id' => '3',
                            'img' => 'https://m.360buyimg.com/n12/s750x750_jfs/t3415/353/519654269/140172/b7524c3a/580d5dc2N96dc3e1f.jpg!q70.jpg'
                        ),
                        array(
                            'id' => '4',
                            'img' => 'https://m.360buyimg.com/n12/s750x750_jfs/t3802/312/543523402/130185/462716f/580d5dc3Na68f1f50.jpg!q70.jpg'
                        ),
                        array(
                            'id' => '5',
                            'img' => 'https://m.360buyimg.com/n12/s750x750_jfs/t11728/220/889194780/105760/800fbaa7/59faaca6N24bce545.jpg!q70.jpg'
                        ),
                        array(
                            'id' => '6',
                            'img' => 'https://m.360buyimg.com/n12/jfs/t3784/181/531937683/210858/9023869c/580d5dc1N4613bb26.jpg!q70.jpg'
                        ),
                    ),
                    'indicatorDots' => true,
                    'autoplay' => true,
                    'interval'=> 4000,
                    'duration'=> 500
                ),
                'list' => array_slice($list, $page * $page_size, $page_size)
            );

            $this->json([
                'code' => 0,
                'data' => $arr
            ]);
    }
}
