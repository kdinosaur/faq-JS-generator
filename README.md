# faq-JS-generator
Script that generates a nicely formatted FAQ table based on an array of questions and answers

We create an array of objects, composed of a table (question) and data (answer). For each one in the array, loop through the table and data.

Construct an HTMLstring if there is a a table or data found by assigning '<details class ="style3"><summary>' + table[data] + '</summary>' and <div class = "content"><p>' + table[data] + '</p></div></details>' '


![image](https://user-images.githubusercontent.com/9345819/230455742-604ffa30-577b-4895-811f-7328f343af12.png)
