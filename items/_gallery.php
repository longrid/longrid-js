<div class="grid__item"  data-type="gallery">
    <div class="grid__item--control">
        <div class="grid__item--control_action add_image">
            <i class="fa fa-picture-o"></i> Добавить фото
            <input type="file" name="file" class="add-images"
                   data-url="<?= \yii\helpers\Url::to(['add-images']) ?>"
                   multiple/>
        </div>
    </div>
    <div class="grid__item--gallery">
        <?php if(isset($data)): ?>
             <?php foreach ($data->items as $item):?>
            <div class="grid__item--gallery__item">
                <div class="image__placeholder">
                    <img src="<?=$item->image?>" alt="">
                </div>
                <div class="editable">
                    <?= $item->content??''?>
                </div>
                <div class="grid__btn remove"><i class="fa fa-trash"></i> Удалить фото</div>
            </div>
            <?php endforeach;?>
        <?php endif;?>
    </div>
</div>