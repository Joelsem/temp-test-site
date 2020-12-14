import React from "react";
import { connect, styled } from "frontity";

class Chat extends React.Component {

  /**
   * Once the post has loaded in the DOM, query the ticker data API and populate DOM with data
   */

   componentDidMount() { 
  (function(){
    var w=window;
    var ic=w.Intercom;
    if(typeof ic==="function"){
      ic('reattach_activator');
      ic('update',w.intercomSettings);
    }else{
      var d=document;
      var i=function(){i.c(arguments);
      };
      i.q=[];i.c=function(args){
        i.q.push(args);
      };
      w.Intercom=i;
      var l=function(){
        var s=d.createElement('script');
        s.type='text/javascript';
        s.async=true;s.src='https://widget.intercom.io/widget/' + "u5jo7xhe";
        var x=d.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s,x);
      };
      if(w.attachEvent){w.attachEvent('onload',l);
      }else{
        w.addEventListener('load',l,false);}
      }
      window.Intercom('boot', {
        app_id: "u5jo7xhe",
       //Website visitor so may not have any user related info
     });
    })()
  };

   render(){
     return( 
     <></>
     )
   }
  }

  export default connect(Chat);