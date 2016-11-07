// your code goes here

import {NgModule,Component} from '@angular/core';
import {BrowserModule} from'@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'

@Component({
    selector:"reddit",
    template:`
   <form  class="ui large form segment">
        <h3 class="ui header"> Add a link</h3>
        <div class="field">
            <label for="title"> Title:</label>
            <input type="text" name="title" #newTitle>
        </div>
         <div class="field">
            <label for="link"> Link:</label>
            <input type="text" name="link" #newLink>
        </div>
    </form>
    <button class="ui positive right floated button" (click)="addArticle(newTitle,newLink)">Submit Link</button>
    `
})
class RedditApp{
 newTitle:string="sfiewojfo";
 addArticle(newTitle,newLink){
     
     console.log(`${newTitle.value} link ${newLink.value}`)
     this.newTitle=newTitle.value;
     newTitle.value="";
     
 }
 constructor(){
     
 }
}
@NgModule({
    declarations:[RedditApp],
    bootstrap:[RedditApp],
    imports:[BrowserModule]
})class RedditAppModule{

}

platformBrowserDynamic().bootstrapModule(RedditAppModule)