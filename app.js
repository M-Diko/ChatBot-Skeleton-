const chatBody = document.querySelector(".chat-body");
const userInput = document.querySelector("#userinput");
const send = document.querySelector(".send");
const Option1 = document.querySelector(".option1");
const Option2 = document.querySelector(".option2");
const Option3 = document.querySelector(".option3");
const Option4 = document.querySelector(".option4");
const Option5 = document.querySelector(".option5");
const Option6 = document.querySelector(".option6");
const Option7 = document.querySelector(".option7");
const Option8 = document.querySelector(".option8");

send.addEventListener('click', () => renderMessage());

Option1.addEventListener('click', () => renderMessage_Option1());
Option2.addEventListener('click', () => renderMessage_Option2());
Option3.addEventListener('click', () => renderMessage_Option3());
Option4.addEventListener('click', () => renderMessage_Option4());
Option5.addEventListener('click', () => renderMessage_Option5());
Option6.addEventListener('click', () => renderMessage_Option6());
Option7.addEventListener('click', () => renderMessage_Option7());
Option8.addEventListener('click', () => renderMessage_Option8());

userInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13){
        renderMessage();
    }
});

//gettin user input and writing it on chatbody
const renderMessage = () => {
    const Input = userInput.value;
    renderMsgElem(Input, "user");    //writing user input
    userInput.value = "";   //reseting user input to have no text in type area
    renderChatResponse(Input);   //writing chat response
};
//logic for clicking on an option
const renderMessage_Option1 = () => {
    const user_opt = 'Option1';
    const output = "You have selected Option One";
    setTimeout(() => {
        renderMsgElem(user_opt, "user");  
        renderMsgElem(output, "chatbot_msg"); 
        setScrollPosition();
    },500); 
};
const renderMessage_Option2 = () => {
    const user_opt = 'Option2';
    const output = "You have selected Option Two";
    setTimeout(() => {
        renderMsgElem(user_opt, "user");  
        renderMsgElem(output, "chatbot_msg"); 
        setScrollPosition();
    },500);
};
const renderMessage_Option3 = () => {
    const user_opt = 'Option3';
    const output = "You have selected Option Three";
    setTimeout(() => {
        renderMsgElem(user_opt, "user");  
        renderMsgElem(output, "chatbot_msg"); 
        setScrollPosition();
    },500);   
};
const renderMessage_Option4 = () => {
    const user_opt = 'Option4';
    const output = "You have selected Option Four";
    setTimeout(() => {
        renderMsgElem(user_opt, "user");  
        renderMsgElem(output, "chatbot_msg"); 
        setScrollPosition();
    },500);   
};
const renderMessage_Option5 = () => {
    const user_opt = 'Option5';
    const output = "You have selected Option Five";
    setTimeout(() => {
        renderMsgElem(user_opt, "user");  
        renderMsgElem(output, "chatbot_msg"); 
        setScrollPosition();
    },500); 
};
const renderMessage_Option6 = () => {
    const user_opt = 'Option6';
    const output = "You have selected Option Six";
    setTimeout(() => {
        renderMsgElem(user_opt, "user");  
        renderMsgElem(output, "chatbot_msg"); 
        setScrollPosition();
    },500);    
};
const renderMessage_Option7 = () => {
    const user_opt = 'Option7';
    const output = "You have selected Option Seven";
    setTimeout(() => {
        renderMsgElem(user_opt, "user");  
        renderMsgElem(output, "chatbot_msg"); 
        setScrollPosition();
    },500);  
};
const renderMessage_Option8 = () => {
    const user_opt = 'Option8';
    const output = "You have selected Option Eight";
    setTimeout(() => {
        renderMsgElem(user_opt, "user");  
        renderMsgElem(output, "chatbot_msg"); 
        setScrollPosition();
    },500);  
};

//chat response to be written in chatbody
const renderChatResponse = (userInput) => {
    const res = getChatbotResponse(userInput);
    setTimeout(() => {
        renderMsgElem(res);
        setScrollPosition();
    },700);
};

//method for writing message on chat body.
const renderMsgElem = (txt, type) => {
    let className = "user-message";
    if (type !== "user") {
        className = "chatbot_msg"
    }
    const msgElem = document.createElement("div");
    const textNode = document.createTextNode(txt);
    msgElem.classList.add(className);
    msgElem.append(textNode);
    chatBody.append(msgElem);
};

//getting response from response.js 
const getChatbotResponse = (userInput) => {
    //check for key words in user input
    if (userInput.toLowerCase().includes("option1")){
        return response["option1"];
    }if (userInput.toLowerCase().includes("option2")){
        return response["option2"];
    }if (userInput.toLowerCase().includes("option3")){
        return response["option3"];
    }if (userInput.toLowerCase().includes("option4")){
        return response["option4"];
    }if (userInput.toLowerCase().includes("option5")){
        return response["option5"];
    }if (userInput.toLowerCase().includes("option6")){
        return response["option6"];
    }if (userInput.toLowerCase().includes("option7")){
        return response["option7"];
    }if (userInput.toLowerCase().includes("option8")){
        return response["option8"];
    }

    return userInput === ""?"Please type in something"
                        :response[userInput.toLowerCase()] == undefined?"Please try something else"
                        :response[userInput.toLowerCase()];
};

//Scrolling to latest message on chat.
const setScrollPosition = () => {
    if (chatBody.scrollHeight > 0) {
        chatBody.scrollTop = chatBody.scrollHeight;
    }
};

