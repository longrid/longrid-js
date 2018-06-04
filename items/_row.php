<div class="grid__row">
    <div class="white_background">
        <div class="grid__row--control">
            <div class="grid__row--move">
                <i class="fa fa-arrows"></i>
                <span class="grid__row--move_title"></span>
            </div>
            <div class="grid__row--remove"><i class="fa fa-trash"></i> Удалить ряд</div>
            <div class="grid__row--collapse"><i class="fa fa-caret-up"></i></div>
        </div>
        <div class="grid__row--container">
            <?php if(isset($data)):?>
                <?php foreach ($data->columns as $column):?>
                    <?= \app\components\longrids\Custom2Longrid::renderAdminBlock($column,'column');?>
                <?php endforeach;?>
            <?php endif;?>
        </div>
    </div>
    <div class="grid__row--add">
        <div class="btn add-inblock" data-type="row"><i class="fa fa-plus"></i> Добавить ряд</div>
    </div>
</div>
