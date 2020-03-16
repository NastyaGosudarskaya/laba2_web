export default class Text{
    constructor(txt_before, txt_after){
        this.text_before=txt_before;
        this.text_after=txt_after;
        this.bold_flag=false;
        this.cursive_flag=false;
        this.underline_flag=false;
        this.up_flag=false;
        this.down_flag=false;
        this.colors_flag=new Map([["red", false],["green", false],["blue", false],["yellow", false]]);
    }
    change_state_toggle(flag)
    {
        flag=!flag;
        return flag;
    }
    set_font_color(color){
        this.text_after.style.color = color;
    }
    set_font_weight_bold(){
        this.text_after.style.fontWeight = "bold";
    }
    set_font_weight_normal(){
        this.text_after.style.fontWeight =  "normal";
    }
    set_font_style_cursive(){
        this.text_after.style.fontStyle = "italic";
    }
    set_font_style_normal(){
        this.text_after.style.fontStyle = "normal";
    }
    set_text_decor_underline(){
        this.text_after.style.textDecoration =  "underline";
    }
    set_text_decor_none(){
        this.text_after.style.textDecoration =  "none";
    }
    set_text_transform_upper(){
        this.text_after.style.textTransform =  "uppercase"; 
    }
    set_text_transform_low(){
        this.text_after.style.textTransform =  "lowercase"; 
    }
    set_text_transform_none(){
        this.text_after.style.textTransform =  "none";
    }
}