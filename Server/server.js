const
    //------------------express----------------->
    express = require("express"),
    app = express();
//<-------------------------------------------
let
    //---------------socket.io----------------->
    socket = require("socket.io"),
    http = require('http'),
    server = http.Server(app),
    io = socket(server),
    //<---------------------------------------------
    path = require("path"),
    bodyParser = require('body-parser'),
    router = express.Router(),
    server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080,
    server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

server.listen(server_port, server_ip_address, () => console.log(`server is running... on ip address ${server_ip_address} port ${server_port}`));
//post req body------------------------------------------------>
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//<------------------------------------------------------------------
//*********************************************************
//public folder view------------------------------------------------->
app.use(express.static(path.join(__dirname, '../build')));
//<--------------------------------------------------------------------------
//*********************************************************
//---------------------------View Sets +Ejs--------------------------->
app.set("views", __dirname);
app.set("view engine", "ejs");
//<----------------require MongoDb/Mongoose Schema--------------------
let
    {ChatDb}=require("./model/model"),
    {ChemaMaker}=require("./model/schema_maker");
//Routes
//--------------------------exact /---------------------------------------

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

//<--------------------------------------------------------------------------
//<--------------------------------------------------------------------------
//---------------------------------------------------------------------------

//-------Socket.io Server Connected------->
io.on('connection', function (socket) {
    console.log('Connected to Server');
    console.log(socket.id);
    socket.on('msg', body => {
        let chatData={
            body
        };
        console.log("changed json : ",JSON.stringify(chatData));
        /*Saving Chat history into MongoDB via Mongoose Schemas*/
        ChemaMaker(ChatDb,chatData.body);
        /*Sending Chat Data back to Client via Socket.io emit*/
        io.sockets.emit('msg', chatData);
        /*Received data from the Client*/
        console.log("client ----> server: ", body);

    })
        .on("disconnect", () => {
            console.log("Socket.io disconnected from the Server");
        })
});

//----------------------------------------------------->

app.use("/", router);
app.use("/chat", router);