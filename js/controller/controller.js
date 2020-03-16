import Text from '../model/model.js';
import View from '../view/view.js';

export default class Controller{
    constructor(){
        this.text = new Text(document.getElementById("before"), document.getElementById("after"));
        this.text_view = new View(this.text);
        document.querySelector('.button2').addEventListener('click',() => {this.init_all_prop(); this.text_view.print_on_screen();});
    }
    init_all_prop()
    {
        this.set_prop_bold();
        this.set_prop_cursive();
        this.set_prop_underline();
        this.set_prop_up_down();
        this.set_prop_color();
    }
    set_prop_color(){
        for (let itter of this.text.colors_flag)
        {
           if (itter[1])
           {
               this.text.set_font_color(itter[0]);
               return;
           }
        }
        this.text.set_font_color("black");
    }
    set_prop_up_down(){
        if (this.text.up_flag)
        {
            this.text.set_text_transform_upper();
        }
        if (this.text.down_flag)
        {
            this.text.set_text_transform_low();
        } 
        if  (!this.text.up_flag && !this.text.down_flag)
        {
            this.text.set_text_transform_none();
        }
    }
    set_prop_bold(){
        if (this.text.bold_flag)
        {
            this.text.set_font_weight_bold();
        }
        else
        {
            this.text.set_font_weight_normal();
        }
    }
    set_prop_cursive(){
        if (this.text.cursive_flag)
        {
            this.text.set_font_style_cursive();
        }
        else
        {
            this.text.set_font_style_normal();
        }
    }
    set_prop_underline(){
        if (this.text.underline_flag)
        {
            this.text.set_text_decor_underline();
        }
        else
        {
            this.text.set_text_decor_none();
        }
    }
}