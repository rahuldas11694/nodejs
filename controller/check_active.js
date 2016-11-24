console.log("******CHECK ACTIVE ENABLE OR PRESENT*******");


// var statuses = function(data){

// 	console.log('=-0987654321234567890-=',data);
// }

// module.exports = statuses;

function APD() {
    this.statuses = function(data) {
        // var save=new Array();
        for (var i = 0; i < data.length; i++) {

            console.log('+++++++++++++++++++', data[i].status);

            if (data[i].status === 'active' || data[i].status === 'present' || data[i].status === 'enable') {
                return data[i].status;

            } else {
                continue;
            }


            // save[i] = data[i].status;
            // console.log('********************',save);

        }


        return 0;





    }

}


var apd = new APD();

module.exports = apd;
