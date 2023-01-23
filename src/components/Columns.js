// Columns component
import Button from "./Button";

const Columns = () => {
    return (
        <div className="w-full mx-auto mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div className="mx-auto animate-bounce">
                    <Button color="blue">
                        Bounce
                    </Button>
                </div>
                <div className="mx-auto animate-spin">
                    <Button color="cyan">
                        Spin
                    </Button>
                </div>
                <div className="mx-auto animate-ping">
                    <Button color="red">
                        Ping
                    </Button>
                </div>
                <div className="mx-auto animate-pulse">
                    <Button color="green">
                        Pulse
                    </Button>
                </div>
                <div className="mx-auto hover:scale-x-125 duration-300">
                    <Button color="orange">
                        Hover scale X
                    </Button>
                </div>
                <div className="mx-auto hover:scale-y-150 duration-300">
                    <Button color="purple">
                        Hover scale Y
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Columns;