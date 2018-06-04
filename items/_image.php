
<div class="grid__item" data-type="image">
    <div class="grid__item--control">
        <div class="left">
            <div class="grid__item--control_action add_image">
                <i class="fa fa-picture-o"></i> Добавить фото
                <input type="file" name="file" class="add-image"
                       data-url="<?= \yii\helpers\Url::to(['add-images']) ?>"
                />
            </div>

        </div>
        <div class="main">

            <?php foreach(app\components\longrid\items\Image::$states as $key=>$state): ?>
                <?php if(isset($data)): ?>
                    <div class="grid__item--control_item <?php if($data->state == $key): ?>  active <?php endif;?>" data-type="<?=$key?>"><?=$state?></div>
                <?php else:?>
                    <div class="grid__item--control_item <?php if('default' == $key): ?>  active <?php endif;?>"" data-type="<?=$key?>"><?=$state?></div>
                <?php endif;?>
            <?php endforeach;?>
        </div>
    </div>
    <div class="grid__item--image">
        <?php if(isset($data)): ?>
            <div class="image__placeholder imageAdded">
                <div class="preview">
                    <img src="<?= $data->image?>" alt="">
                </div>
                <div class="remove grid__btn">Удалить фото</div>
            </div>
            <div class="editable">
                <?= $data->content??''?>
            </div>
        <?php else:?>
            <div class="image__placeholder">
                <div class="preview"></div>
                <div class="remove grid__btn">Удалить фото</div>
            </div>
            <div class="editable">

            </div>
        <?php endif?>

    </div>
</div>