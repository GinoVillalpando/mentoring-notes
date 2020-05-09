# mentoring-notes
My mentoring notes when working with other Fullstack Students

## Monday March 30th, 2020

Assisted Vlad with docker to get site hosted

## Tuesday March 31st, 2020

Assisted Vlad from cohort 27 with hosting and APIS

## Wednesday April 1st, 2020

Assisted india with her OOP project. Needed OOP to be explained in more depth and understanding basic PHP 

## Thursday April 2nd, 2020

Assisted Jonah with understanding the insert method to insert data in a table in their database

## Friday April 3rd, 2020

Assisted india with bugs in her php code and showed her an example of instatiation 

## Monday April 6th, 2020

Assisted Ryan from cohort 27 with Docker for odysseyofultimate.com

## Tuesday April 7th, 2020

Assisted Ryan further with Docker and was able to host the site 

## Wednesday April 8th, 2020

Assisted Ryan with getting SSL setup for their domain and was able to compose back up with SSL

## Thursday April 9th, 2020

Assisted Ryan with implementing a filter method that will filter out their characters based on what is typed in their input field using prev state

## Friday April 10th, 2020

Helped Ryan understand the use of redux hooks and how to implement it when developing a profile's favorite characters. Also informed him on how to create his own hook for JWT tokens to check if the user is signed in and to hide or show elements based on that JWT Token. 

## Friday April 17th, 2020

Explained the basics of Bootstrap and how to implement a navbar into their pwp and explained more about flex box and positioning.

### referenced:
 [navbar](https://getbootstrap.com/docs/4.4/components/navbar/) && [starter template](https://getbootstrap.com/docs/4.4/getting-started/introduction/) && [flexbox mechanics and positioning](https://getbootstrap.com/docs/4.4/utilities/flex/) && [grid](https://getbootstrap.com/docs/4.4/layout/grid/)

## Monday May 4th, 2020 

    Assisted Gabriela with connecting her checkboxes for products to link up the product name and product size to the message body of her contact form. 

    Assisted India with padding and margin styling in their pwp by identifying which divs would need the padding or margin per box model. 

## Tuesday May 5th, 2020

    Helped Gabriela with the else statement to reload page and reset values when checkboxes has been unchecked

## Wednesday May 6th, 2020 

    Assisted india with more styling with headers on pwp and explained to use the box model to understand how divs work

## Thursday May 7th, 2020

    helped india understand the errors from w3 validator and how to fix them by removing some parts of her code or changing something like the id parameters

## Friday May 8th, 2020

### JavaScript Lecture:
        we need to first understand how JavaScript works and how it's working in the browser in our case. Now there are libraries that takes a lot of Vanilla(original or basic JavaScript without any libraries) JavaScript code and automates current things we would like to do in JavaScript in less code such as jQuery you guys may know what this is if you used something called Bootstrap. 

            Conceptual Asides: syntax parsers, execution contexts and lexical 
                               environments, name/value pairs 



            Syntax Parsers: a program that reads your code and determines what it does
                            and if your grammar is valid. so it takes ruling that has been declared from the people who developed on 
                            JavaScript and determines what you wrote meets that criteria. Essentially a computer translator. [go to script.js to show example ]



            Lexical Environment: where something lives physically in the code your writing. In our example our variable helloGreeting lives lexically in
                                  our function hello()
                                 so knowing where that lives is important to how your code is outputted and the Syntax Parser or "computer translator" cares how that is being served. if the order is not correct then you may get errors. so for an example you may call to variable in a function that was called before that variable is defined. you may get an error like helloGreeting has not yet be defined. 



            Execution Context: a wrapper to help manage your code that is running. 
                               in your Lexical Environments will be managed by this execution context which just means the code that is 
                               currently running



            Name/Value pairs: a naming that maps to a unique value. for an example 
                              ' "person": "name": "george","age": "30", ' you'll see this a lot when working with data and especially data that
                              is written in JSON which is just a JavaScript Object Notation which is what it sounds like. it's just document notation done in JavaScript Objects so that the Syntax Parsers of JavaScript can understand and translate how that data will behave in our program.

                            Object: an object is just a series collection of these
                                    name/value pairs. in our example person is our object which has name/value pairs of "name" and the unique value
                                    is "george"


        
        when we write JavaScript code it's executed Globally in our Execution Context. global is the base Execution Context so this is the first thing that is ran. by default we execute the Global object which can be translated as 'this' you may have seen 'this' already when referring to the current context your code is running. in our example we are loading our javascript file and nothing is shown because we have no errors running our script although there is no code written yet. that's because we have executed our global object and we are able to see the Execution Context and since we have no code written we can just see the global object which is this... our browser window since we are using it within an internet browser. If we have a seperate tab open that is another Global Object and it's own Execution Context. 



            Global: this means it lives outside a function where it's accessible by 
                    anything else whether that is another function or even a variable. Another place where the code lives

            (show in example how our function and variables can be accessible in the console)




            creation and 'Hoisting': with our example with have a variable and function 
                                     now we are going to try and call to the function and variable before they are defined. in the output you'd expect it to error out because we are calling to them before we define them but in this case we get the output for our function and just an undefined value for our variable instead of an actual error. However if we use let the most updated way to define a variable from ES6 then we get an error. This is because it was created and hoisted within memory. we get the output to our function because it is retained in memory and gets stored in the global execution context.




            Conceptual Asides: undefined, single threaded and synchronous execution 


            undefined: so instead of getting the error that this variable has not been
                       referenced we get a JavaScript value of undefined which doesn't quiet mean it doesn't have any value but 
                       rather the variable just has not been set. (show if and else statement to the variable) so if we declare a variable without any ruling then it receives that undefined
                       value but once we give it's ruling then it's defined and that's what happens when we call to a variable that is later defined since the variable is retained in memory 
                       and not yet declared until it has reached the line of code where the variable is defined however a function will store it's own variables and rulings within it's Lexical
                       Environment. 



            single threaded: one command is being executed at a time. JavaScript is 
                             single thread so it executes 1 line of code at a time. in our context this means it is executed one line at a
                             time in the browser



            Synchronous: one at a time. so again just meaning one line of code being 
                         executed at a time. asynchronous essentially means it is executing many lines of code from other different 
                         sources within 1 line of code. Since JavaScript is single threaded we use asynchronous calls to exectue many things at once 
