<script>
//remember to load a pixel in the HTML to call this function

        function populateFaq() {
            const FAQarr = [
                {"question" : "How will I save by participating in this program?",
                    "answer" : "This is a flat rate program that will cost $XXX per semester versus purchasing individual textbooks. Having easy access to required course materials by the first day of class means students have more time to focus on preparing for classes instead of spending time sourcing textbooks."},
                {"question" : "How will I get my books?",
                "answer" : "answer2"},
                {"question" : "How much is the cost?",
                "answer" : "answer3"}
            ];

            let HTMLstring = '';

//Create an array of objects, loop thru each. For each table in the array, loop thru each key
//Each object is made up of a Table (question), and key (answer)

            FAQarr.forEach(table => {
                Object.keys(table).forEach(data => {
                    if (data === 'question') {
                        HTMLstring += '<details class ="style3"><summary>' + table[data] + '</summary>';
                    }
                    if (data === 'answer') {
                        HTMLstring += '<div class = "content"><p>' + table[data] + '</p></div></details>'
                    }
                });
            });

            document.getElementById('replaceMe').innerHTML = HTMLstring;

        }
    </script>
