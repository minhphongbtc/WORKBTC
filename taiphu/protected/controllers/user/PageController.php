<?php

class PageController extends Controller {

    public $limit = 12;
    public $limitPost = 12;

    /**
     * Declares class-based actions.
     */
    public function actions() {
        return array(
            // captcha action renders the CAPTCHA image displayed on the contact page
            'captcha' => array(
                'class' => 'CCaptchaAction',
                'backColor' => 0xFFFFFF,
            ),
            // page action renders "static" pages stored under 'protected/views/site/pages'
            // They can be accessed via: index.php?r=site/page&view=FileName
            'page' => array(
                'class' => 'CViewAction',
            ),
        );
    }

    public function beforeAction($action) {
        if (parent::beforeAction($action)) {
            
        }
        if (Yii::app()->session['lang']) {
            $this->changeLanguage(Yii::app()->session['lang']);
        } else {
            if (isset($_GET['lg'])) {
                $this->changeLanguage($_GET['lg']);
            }
        }
        return true;
    }

    public function actionChangeLanguage($lg) {
        $this->changeLanguage($lg);
        if (!Yii::app()->request->isAjaxRequest) {
            $this->redirect(Yii::app()->createUrl('site/index', array('lg' => $lg)));
        }
    }

    public function changeLanguage($lg) {
        if (in_array($lg, array('vi', 'en'))) {
            $this->language = $lg;
            Yii::app()->language = $lg;
            Yii::app()->session['lang'] = $lg;
        } else {
            $this->changeLanguage('vi');
        }
    }

    public function actionIndex($slug) {
        $model = $this->loadPage($slug);
        if ($model):
            $this->title = $model['name_' . Yii::app()->language];
            $this->metaTitle = $model['title'];
            $this->metaKeywords = $model['keyword'];
            $this->metaDescription = $model['description'];
            $models = Yii::app()->db->createCommand('select * from `' . MPages::model()->tableName() . '` where `status` = 1 order by `order` ASC')->queryAll();
//            if (!$this->is_mobile) {
                $this->render('index', array('model' => $model, 'models' => $models));
//            } else {
//                $this->render('index_mobile', array('model' => $model, 'models' => $models));
//            }
        else:
            throw new NotFoundHttpException('Content Not Found');
        endif;
    }

    public function loadPage($slug) {
        $model = Yii::app()->db->createCommand('select * from `' . MPages::model()->tableName() . '` where `status` = 1 and `slug` ="' . $slug . '"')->queryRow();
        if (!$model) {
            throw new CHttpException(404, 'Không tìm thấy nội dung');
        }
        return $model;
    }

}
