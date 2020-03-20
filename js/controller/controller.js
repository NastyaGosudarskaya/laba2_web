import Text from '../model/model.js';
import View from '../view/view.js';

export default class Controller{
    constructor(){
        this.text = new Text(document.getElementById("before"), document.getElementById("after"));
        this.text_view = new View(this.text);
        
        document.querySelector('.button2').addEventListener('click',() => {this.init_all_prop(); this.text_view.print_on_screen();});
        
        document.querySelector('#bold').addEventListener('click', () => {this.text.bold_flag=this.toggle_pressed(this.text.bold_flag, "bold");});
        document.querySelector('#cursive').addEventListener('click', () => {this.text.cursive_flag=this.toggle_pressed(this.text.cursive_flag, "cursive");});
        document.querySelector('#underline').addEventListener('click', () => {this.text.underline_flag=this.toggle_pressed(this.text.underline_flag, "underline");});
        document.querySelector('#up').addEventListener('click', () => {[this.text.up_flag, this.text.down_flag] = this.toggle_up_down(this.text.up_flag, this.text.down_flag, "up", "down");});
        document.querySelector('#down').addEventListener('click', () => {[this.text.down_flag, this.text.up_flag]=this.toggle_up_down(this.text.down_flag, this.text.up_flag,  "down", "up");});
        this.buttons_colors = document.querySelectorAll('.color_but');
        for (let button of this.buttons_colors) {
            button.addEventListener('click', () => {this.toggle_collor(button);});
        }
    }
    toggle_collor(button){
        this.text.change_color_button(button);
    }
    toggle_pressed(flag, id){
        return this.text.change_button(flag, id);
    }
    toggle_up_down(flag1, flag2, id1, id2)
	{
		return this.text.change_up_down_button(flag1, flag2, id1, id2);
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