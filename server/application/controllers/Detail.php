<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Auth\LoginService as LoginService;
use QCloud_WeApp_SDK\Constants as Constants;

class Detail extends CI_Controller {
    public function index() {
        $detail = array(
            'title' => '我是超级核桃'. mt_rand(1, 100),
            'time' => date("Y-m-d H:i:s"),
            'desc' => '照片曝光后，网友纷纷围观并留言，其中有网友调侃道：“标题：《两个油腻的中年男子》。”也有网友称：“这哪儿是两个情敌啊，明明是一对。”更有网友称：“你已经变成老韩老师了，人家还是雷雷，人家叶青也嫁给雷雷了”<br>据悉，2007年，沙溢和邓超曾一起参演《甜蜜蜜》，在剧中，沙溢所饰演的韩阳爱着叶青儿（孙俪饰），而叶青儿却喜欢雷雷（邓超饰），所以，沙溢称和邓超是情敌。'
        );

        $this->json([
            'code' => 0,
            'detail' => $detail
        ]);
    }
}
