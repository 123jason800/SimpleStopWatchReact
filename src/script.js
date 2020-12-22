class StopWatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            miliseconds: 0
        }
        this.timer = null;
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
    }

    start() {
        // ensures user can only click start once. 
        if (!this.timer) {
            let startTime = Date.now();
            this.timer = setInterval(() => {
                    const timeEveryTik = Date.now();
                    const miliseconds = (timeEveryTik- startTime) + this.state.miliseconds;
                    this.setState({miliseconds});
                    startTime = timeEveryTik;
            },100);
        }
    }

    stop() {
        // global is safer? Timer is set to null so it can be started again. 
        window.clearInterval(this.timer);
        this.timer = null;
    }

    reset() {
        this.stop();
        this.setState({miliseconds:0});
    }

    





    render() {
        const convertedTimer = (miliseconds) => {
            let minutes = Math.floor(miliseconds / 60000);
            let seconds =  Math.floor(miliseconds / 1000) % 60;
            let tenthSeconds = Math.floor(miliseconds / 100) % 10;
            return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}.${tenthSeconds}`;
        }


        return (
            <React.Fragment>
                <h1 className="text-center">Stop Watch</h1>
                <div className="display text-center my-3">
                    <h2>{convertedTimer(this.state.miliseconds)}</h2>
                </div>

                <div className="row justify-content-center">
                    <button className="btn col-1 mx-3 btn-outline-success" onClick = {this.start} >Start</button>
                    <button className="btn col-1 mx-3 btn-outline-danger" onClick={this.stop} >Stop</button>
                    <button className="btn col-1 mx-3 btn-outline-warning"onClick={this.reset}>Reset</button>
                </div>
               
              
            
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <StopWatch />,
    document.getElementById('root')
);