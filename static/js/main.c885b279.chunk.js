(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__IFC-O",BreadTop:"BurgerIngredient_BreadTop__xI-Wp",Seeds1:"BurgerIngredient_Seeds1__3NcnK",Seeds2:"BurgerIngredient_Seeds2__3u9ZT",Meat:"BurgerIngredient_Meat__3eclB",Cheese:"BurgerIngredient_Cheese__3j2IK",Salad:"BurgerIngredient_Salad__1sQVm",Bacon:"BurgerIngredient_Bacon__2AtNt"}},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__2uBHz",Open:"SideDrawer_Open__1Zw2D",Close:"SideDrawer_Close__t3j3-",Logo:"SideDrawer_Logo__3Xl72"}},,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__diJXt",Label:"BuildControl_Label__1vPXq",Less:"BuildControl_Less__DYIzd",More:"BuildControl_More__1qlut"}},function(e,t,n){e.exports={Label:"Input_Label__1FE_p",Input:"Input_Input__2nCMY",InputElement:"Input_InputElement__2PYoF",Invalid:"Input_Invalid__2fOHf"}},,,function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__WREBM",OrderButton:"BuildControls_OrderButton__16tWa",enable:"BuildControls_enable__yX9iv",PriceDisplay:"BuildControls_PriceDisplay__DMwrP"}},,function(e,t,n){e.exports={Content:"Layout_Content__2rXhf",ButtonToggler:"Layout_ButtonToggler__1dui8"}},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__IOYzd",DesktopOnly:"Toolbar_DesktopOnly__N2C-9"}},function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2wyg8",active:"NavigationItem_active__lChAY"}},,,function(e,t,n){e.exports={Button:"Button_Button__3Oy8F",Success:"Button_Success__1jwqp",Danger:"Button_Danger__2AHyD"}},,function(e,t,n){e.exports={Order:"Order_Order__3HBxu",Span:"Order_Span___v9So"}},,,,,,,,,,,function(e,t,n){e.exports={Logo:"Logo_Logo__2EfCX"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__2wLCH"}},function(e,t,n){e.exports={DrawerToggle:"ToggleSideDrawer_DrawerToggle__2enpA"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3_le5"}},function(e,t,n){e.exports={Burger:"Burger_Burger__3RoEm"}},function(e,t,n){e.exports={Modal:"Modal_Modal__3Yarv"}},,function(e,t,n){e.exports={Loader:"Spinner_Loader__v7uBI",Load5:"Spinner_Load5__1Z3Nk"}},,function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__1_FNC"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__23tT4",Button:"ContactData_Button__34iEC"}},,function(e,t,n){e.exports=n(87)},,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),i=n.n(o),c=(n(63),n(4)),l=n(5),s=n(7),u=n(6),d=(n(64),function(e){return e.children}),m=n(28),p=n.n(m),h=n(29),g=n.n(h),v=n(24),f=n.n(v),E=n(46),_=n.n(E),b=function(){return r.a.createElement("div",{className:_.a.Logo},r.a.createElement("img",{src:f.a,alt:"MyBurger"}))},C=n(30),y=n.n(C),k=n(15),O=function(e){return r.a.createElement("li",{className:y.a.NavigationItem},r.a.createElement(k.b,{to:e.link,exact:!0,activeClassName:y.a.active},e.children))},N=n(47),j=n.n(N),B=function(){return r.a.createElement("ul",{className:j.a.NavigationItems},r.a.createElement(O,{link:"/"},"Burger Builder"),r.a.createElement(O,{link:"/orders"},"Orders"))},w=n(48),I=n.n(w),S=function(e){return r.a.createElement("div",{className:I.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},D=function(e){return r.a.createElement("header",{className:g.a.Toolbar},r.a.createElement(S,{clicked:e.clicked}),r.a.createElement(b,null),r.a.createElement("nav",{className:g.a.DesktopOnly},r.a.createElement(B,null)))},x=n(17),T=n.n(x),L=n(49),H=n.n(L),A=function(e){return e.show?r.a.createElement("div",{className:H.a.Backdrop,onClick:e.clicked}):null},P=function(e){var t=[T.a.SideDrawer,T.a.Close];return e.closed&&(t=[T.a.SideDrawer,T.a.Open]),r.a.createElement(d,null,r.a.createElement(A,{show:e.closed,clicked:e.clicked}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("img",{className:T.a.Logo,src:f.a,alt:"MyBurger"}),r.a.createElement("nav",null,r.a.createElement(B,null))))},M=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showSidedrawer:!1},e.showSidedrawerHandler=function(){e.setState({showSidedrawer:!0})},e.hideSidedrawerHandler=function(){e.setState({showSidedrawer:!1})},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement("div",{className:p.a.ButtonToggler},r.a.createElement(D,{clicked:this.showSidedrawerHandler})),r.a.createElement(P,{open:this.showSidedrawerHandler,closed:this.state.showSidedrawer,clicked:this.hideSidedrawerHandler}),r.a.createElement("main",{className:p.a.Content},this.props.children))}}]),n}(a.Component),F=n(3),R=n(57),V=n(13),Y=n.n(V),q=function(e){var t=null;switch(e.type){case"bread-bottom":t=r.a.createElement("div",{className:Y.a.BreadBottom});break;case"bread-top":t=r.a.createElement("div",{className:Y.a.BreadTop},r.a.createElement("div",{className:Y.a.Seeds1}),r.a.createElement("div",{className:Y.a.Seeds2}));break;case"meat":t=r.a.createElement("div",{className:Y.a.Meat});break;case"cheese":t=r.a.createElement("div",{className:Y.a.Cheese});break;case"salad":t=r.a.createElement("div",{className:Y.a.Salad});break;case"bacon":t=r.a.createElement("div",{className:Y.a.Bacon});break;default:t=null}return t},W=n(50),z=n.n(W),U=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(R.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(q,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding Ingredients!")),r.a.createElement("div",{className:z.a.Burger},r.a.createElement(q,{type:"bread-top"}),t,r.a.createElement(q,{type:"bread-bottom"}))},X=n(26),G=n.n(X),Z=n(20),J=n.n(Z),$=function(e){return r.a.createElement("div",{className:J.a.BuildControl},r.a.createElement("button",{className:J.a.Less,onClick:e.removed,disabled:e.disable},"-"),r.a.createElement("div",{className:J.a.Label},e.label),r.a.createElement("button",{className:J.a.More,onClick:e.added},"+"))},K=[{label:"Salad",type:"salad"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"},{label:"Bacon",type:"bacon"}],Q=function(e){return r.a.createElement("div",{className:G.a.BuildControls},r.a.createElement("p",{className:G.a.PriceDisplay},r.a.createElement("strong",null,"Current Price: ",r.a.createElement("em",null,"$",e.price.toFixed(2)))),K.map((function(t){return r.a.createElement($,{key:t.label,label:t.label,added:function(){return e.ingredientsAdded(t.type)},removed:function(){return e.ingredientsRemoved(t.type)},disable:e.disabled[t.type]})})),r.a.createElement("button",{className:G.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},r.a.createElement("strong",null,"ORDER NOW")))},ee=n(51),te=n.n(ee),ne=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(A,{show:this.props.show,clicked:this.props.clicked}),r.a.createElement("div",{className:te.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),n}(a.Component),ae=n(33),re=n.n(ae),oe=function(e){return r.a.createElement("button",{disabled:e.disabled,onClick:e.clicked,className:[re.a.Button,re.a[e.btnType]].join(" ")},e.children)},ie=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t)," : ",e.ingredients[t])}));return r.a.createElement(d,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,"Continue to CheckOut: ",r.a.createElement("strong",{style:{size:"2.5rem"}},"$ ",e.totalPrice.toFixed(2))),r.a.createElement(oe,{btnType:"Danger",clicked:e.purchaseCancel},"CANCEL"),r.a.createElement(oe,{btnType:"Success",clicked:e.purchaseContinue},"CONTINUE"))},ce=n(52),le=n.n(ce).a.create({baseURL:"https://react-my-burger-44fa5.firebaseio.com/"}),se=n(53),ue=n.n(se),de=function(){return r.a.createElement("div",{className:ue.a.Loader},"Loading...")},me=function(e,t){return function(n){Object(s.a)(o,n);var a=Object(u.a)(o);function o(){var e;return Object(c.a)(this,o),(e=a.call(this)).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),e.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})})),e}return Object(l.a)(o,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(ne,{show:this.state.error,clicked:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),o}(a.Component)},pe=n(14),he=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={purchasing:!1,loading:!1,error:!1},e.updatePurchaseState=function(){return Object.keys(e.props.ings).map((function(t){return e.props.ings[t]})).reduce((function(e,t){return e+t}),0)>0},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.history.push({pathname:"/checkout"})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=Object(F.a)({},this.props.ings),t=this.state.error?r.a.createElement("p",{style:{backgroundColor:"white",textAlign:"center"}},"Cat't load ingredients!"):r.a.createElement(de,null),n=r.a.createElement(de,null);for(var a in this.props.ings&&(t=r.a.createElement(d,null,r.a.createElement(U,{ingredients:this.props.ings}),r.a.createElement(Q,{ingredientsAdded:this.props.onIngredientAdded,ingredientsRemoved:this.props.onIngredientRemoved,disabled:e,price:this.props.totalAmount,purchasable:this.updatePurchaseState(),ordered:this.purchaseHandler})),n=r.a.createElement(ie,{ingredients:this.props.ings,purchaseCancel:this.purchaseCancelHandler,purchaseContinue:this.purchaseContinueHandler,totalPrice:this.props.totalAmount}),this.state.loading&&(n=r.a.createElement(de,null))),e)e[a]=e[a]<=0;return r.a.createElement(d,null,r.a.createElement(ne,{show:this.state.purchasing,clicked:this.purchaseCancelHandler},n),t)}}]),n}(a.Component),ge=Object(pe.b)((function(e){return{ings:e.ingredients,totalAmount:e.totalPrice,purchasable:e.purchasable}}),(function(e){return{onIngredientAdded:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onIngredientRemoved:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})}}}))(me(he,le)),ve=n(55),fe=n.n(ve),Ee=function(e){return r.a.createElement("div",{className:fe.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it tastes good!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(U,{ingredients:e.ingredients})),r.a.createElement(oe,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),r.a.createElement(oe,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},_e=n(2),be=n(56),Ce=n.n(be),ye=n(21),ke=n.n(ye),Oe=function(e){var t=null,n=[ke.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(ke.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:ke.a.Input},r.a.createElement("label",{className:ke.a.Label},e.label),t)},Ne=function(e,t,n,a){return{elementType:e,elementConfig:{type:t,placeholder:n},value:a,validation:{required:!0},valid:!1,touched:!1}},je=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={orderForm:{name:Ne("input","text","Your Name",""),street:Ne("input","text","Street",""),zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:6,maxLength:6},valid:!1,touched:!1},country:Ne("input","text","Country",""),email:Ne("input","email","Your Email",""),deliveyMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"",validation:{},valid:!0}},formIsValid:!1,loading:!1},e.orderPurchasedHandler=function(t){t.preventDefault();var n=(+e.props.price).toFixed(2);e.setState({loading:!0});var a={};for(var r in e.state.orderForm)a[r]=e.state.orderForm[r].value;var o={ingredients:e.props.ings,price:n,orderData:a};le.post("/orders.json",o).then((function(t){e.setState({loading:!1}),e.props.history.push("/")})).catch((function(t){return e.setState({loading:!1})}))},e.checkValidity=function(e,t){var n=!0;return!t||(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n)},e.inputChangedHandler=function(t,n){var a=Object(F.a)({},e.state.orderForm);console.log(["input Handler"]);var r=Object(F.a)({},a[n]);r.value=t.target.value,r.valid=e.checkValidity(r.value,r.validation),r.touched=!0,a[n]=r;var o=!0;for(var i in e.state.orderForm)o=a[i].valid&&o;e.setState({orderForm:a,formIsValid:o})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=r.a.createElement("form",{onSubmit:function(t){return e.orderPurchasedHandler(t)}},t.map((function(t){return r.a.createElement(Oe,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(n){return e.inputChangedHandler(n,t.id)},invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched})})),r.a.createElement(oe,{btnType:"Success",disabled:!this.state.formIsValid},"Order Now"));return this.state.loading&&(a=r.a.createElement(de,null)),r.a.createElement("div",{className:Ce.a.ContactData},r.a.createElement("h4",null,"Enter your contact details"),a)}}]),n}(a.Component),Be=Object(pe.b)((function(e){return{ings:e.ingredients,price:e.totalPrice}}))(je),we=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ee,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),r.a.createElement(_e.a,{path:this.props.match.path+"/contact-data",component:Be}))}}]),n}(a.Component),Ie=Object(pe.b)((function(e){return{ings:e.ingredients}}))(we),Se=n(35),De=n.n(Se),xe=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map((function(e){return r.a.createElement("span",{key:e.name,className:De.a.Span},e.name," (",e.amount,")")}));return r.a.createElement("div",{className:De.a.Order},r.a.createElement("p",null,"Ingredients: ",a),r.a.createElement("p",null,"Price: ",r.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))},Te=me(function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={orders:[],loading:!0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;le.get("/orders.json").then((function(t){var n=[];for(var a in t.data)n.push(Object(F.a)(Object(F.a)({},t.data[a]),{},{id:a})),console.log(n);e.setState({orders:n,loading:!1})})).catch((function(t){e.setState({loading:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.orders.map((function(e){return r.a.createElement(xe,{ingredients:e.ingredients,key:e.id,price:e.price})})))}}]),n}(a.Component),le),Le=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,null,r.a.createElement(_e.c,null,r.a.createElement(_e.a,{path:"/checkout",component:Ie}),r.a.createElement(_e.a,{path:"/Orders",component:Te}),r.a.createElement(_e.a,{path:"/",exact:!0,component:ge}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var He=n(25),Ae=n(19),Pe={ingredients:{salad:0,cheese:0,meat:0,bacon:0},totalPrice:4},Me={salad:.5,cheese:.7,meat:1.2,bacon:1},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return Object(F.a)(Object(F.a)({},e),{},{ingredients:Object(F.a)(Object(F.a)({},e.ingredients),{},Object(Ae.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:e.totalPrice+Me[t.ingredientName]});case"REMOVE_INGREDIENT":return Object(F.a)(Object(F.a)({},e),{},{ingredients:Object(F.a)(Object(F.a)({},e.ingredients),{},Object(Ae.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-Me[t.ingredientName]})}return e},Re=Object(He.b)(Fe);i.a.render(r.a.createElement(pe.a,{store:Re},r.a.createElement(k.a,null,r.a.createElement(Le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[58,1,2]]]);
//# sourceMappingURL=main.c885b279.chunk.js.map