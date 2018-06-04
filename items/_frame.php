<?php
//Так делать нельзя!
$states = [
    'default' => 'Обычный',
    'adaptive' => 'Адаптивный',
]
?>
<div class="grid__item"  data-type="frame">
    <div class="grid__item--control">
        <div class="main">
            <?php foreach($states as $key=>$state): ?>
            <?php if(isset($data)): ?>
                <div class="grid__item--control_item <?php if($data->state == $key): ?>  active <?php endif;?>" data-type="<?=$key?>"><?=$state?></div>
            <?php else:?>
            <div class="grid__item--control_item <?php if('default' == $key): ?>  active <?php endif;?>"" data-type="<?=$key?>"><?=$state?></div>
        <?php endif;?>
        <?php endforeach;?>
        </div>
    </div>
    <div class="grid__item--frame">
        <textarea placeholder="Введите HTML"><?=$data->content??''?></textarea>
    </div>
</div>