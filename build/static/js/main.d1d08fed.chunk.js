(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e){e.exports=[{id:1,name:"Starry Night",image:"https://www.vincentvangogh.org/images/paintings/the-starry-night.jpg"},{id:2,name:"Cafe Terrace at Night",image:"https://www.vincentvangogh.org/images/paintings/cafe-terrace-at-night.jpg"},{id:3,name:"Self Portrait with Strawhat",image:"https://www.vincentvangogh.org/images/paintings/self-portrait-with-straw-hat.jpg"},{id:4,name:"Vase with Daisies and Poppies",image:"https://www.vincentvangogh.org/images/paintings/vase-with-daisies-and-poppies.jpg"},{id:5,name:"Head of a Woman",image:"https://www.pablopicasso.org/images/paintings/head-of-a-woman.jpg"},{id:6,name:"Asleep",image:"https://www.pablopicasso.org/images/paintings/asleep.jpg"},{id:7,name:"The Kitchen",image:"https://www.pablopicasso.org/images/paintings/the-kitchen.jpg"},{id:8,name:"The Enigma of My Desire",image:"https://www.dalipaintings.com/images/paintings/the-enigma-of-my-desire.jpg"},{id:9,name:"Invisible Afghan with the Apparition",image:"https://www.dalipaintings.com/images/paintings/invisible-afghan-with-the-apparition.jpg"},{id:10,name:"Persistence of Memory",image:"https://www.dalipaintings.com/images/paintings/the-persistence-of-memory.jpg"},{id:11,name:"Water Lilies, Harmony in Blue",image:"https://www.claude-monet.com/images/paintings/water-lilies-harmony-in-blue.jpg"},{id:12,name:"La Japonaise",image:"https://www.claude-monet.com/images/paintings/la-japonaise.jpg"}]},,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},,,function(e,a,t){e.exports=t(24)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),s=t(4),r=t.n(s),c=(t(16),t(5)),o=t(6),m=t(9),l=t(7),p=t(10),g=t(8),h=t.n(g),w=(t(18),t(20),function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{className:"img-thumbnail img-responsive",alt:e.name,src:e.image,onClick:function(){return e.clickPicture(e.id)}})))}),d=(t(22),function(e){return n.a.createElement("div",{className:"true"===e.shakeWrapper?"wrapperShake":"wrapper"},e.pictures)}),u=t(2),f=function(e){function a(){var e,t;Object(c.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(n)))).state={cards:u,clickedArray:[],topScore:0,score:0,message:"",shakeit:"false"},t.clickPicture=function(e){var a=t.shuffleArray(u);t.setState({cards:a}),t.state.clickedArray.includes(e)?t.setState({score:0,clickedArray:[],message:"Incorrect!! Game Over \u2639\ufe0f Click an image to start again!",shakeit:"true"}):t.setState({clickedArray:t.state.clickedArray.concat([e]),score:t.state.score+1,message:"Correct!! \ud83d\ude42",shakeit:"false"}),t.state.score>t.state.topScore&&t.setState({topScore:t.state.score})},t.shuffleArray=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),i=[e[t],e[a]];e[a]=i[0],e[t]=i[1]}return e},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),n.a.createElement("h1",{className:"App-title"},"Welcome to React Clicky Game!!")),n.a.createElement("h3",{className:"App-intro"},n.a.createElement("strong",null,"Click on an image to earn points, but don't click on any, more than once!"),n.a.createElement("p",{className:"score"},n.a.createElement("strong",null,"Score: ",this.state.score," | TopScore: ",this.state.topScore)),n.a.createElement("p",{className:"message"},n.a.createElement("strong",null,this.state.message))),n.a.createElement(d,{shakeWrapper:this.state.shakeit,pictures:this.state.cards.map(function(a){return n.a.createElement(w,{clickPicture:e.clickPicture,id:a.id,key:a.id,name:a.name,image:a.image})})}),n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"container"},n.a.createElement("span",{className:"text-muted"},"\xa9Diana Julaton - Clicky Game - React app."))))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.d1d08fed.chunk.js.map