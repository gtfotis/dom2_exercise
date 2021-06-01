'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log("The DOM Content has loaded.");
    const bodyElement = document.querySelector('#theBody');
    const divElementOne = document.querySelector('#container');
    const navElement = document.createElement('nav');
    const headElement = document.head;
    headElement.innerHTML += '<link rel="stylesheet" href="styles/styles.css">';
    navElement.innerHTML = '<ul><li><h1>HighOnCoding</h1></li> <li><a id="homeBar" href="#home">Home</a></li> <li><a id="categories" href="#categories">Categories</a></li></ul>';
    bodyElement.prepend(navElement);
    divElementOne.innerHTML = '<h2>Curse of the Current Reviews</h2> <p>When you want to buy any application from the Apple ITunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors: price, screenshots, and reviews.</p>'
    const divElementTwo = document.createElement('div');
    divElementTwo.classList.add('containerTwo');
    bodyElement.append(divElementTwo);
    divElementTwo.innerHTML = '<h3>Hello WatchKit</a></h3> <p>Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framwork enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the the WatchKit framework and developing apps for the Apple Watch.</p> <ul class="commentsLikes"><li><a id="commentsLink" href="#commentsLink">12 comments </li></a> <li><a id="likesCounter" href="#likesCounter">124 Likes</li></a>'
    const divElementThree = document.createElement('div');
    divElementThree.classList.add('containerThree');
    bodyElement.append(divElementThree);
    divElementThree.innerHTML = '<h3>Introduction to Swift</h3> <p> Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.</p> <ul class="commentsLikes"><li><a id="commentsLinkTwo" href="#commentsLinkTwo">15 comments</li></a> <li><a id="likesCounterTwo" href="#likesCounterTwo">45 Likes</li></a>'





    // const allParagraphs = document.querySelectorAll('p');
    // console.log("How many paragraphs? " + allParagraphs.length);
    // console.log(allParagraphs);
    // // this will loop through ALL paragraphs
    // allParagraphs.forEach(function (paragraph, index) {
    //     // inside this loop we are working with EACH individual paragraph
    //     console.log(index, paragraph);
    //     const spanElement = document.createElement('span');
    //     spanElement.innerText = `This paragraph is at index ${index}.`
    //     spanElement.classList.add('bold');
    //     paragraph.append(spanElement);
    // });
});

