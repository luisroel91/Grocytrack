import React from 'react';
import SplitText from 'react-pose-text';

const wordPoses = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    },
    transition: {
        ease: 'linear',
        default: {
            duration: '300',
        }
    }
}

class IntroParagraph extends React.Component {

    state = {
        isVisible: false
    };

    componentDidMount() {
        this.setState({
            isVisible: true
        })
    }

    render() {
        return (
            <div>
                <SplitText wordPoses={wordPoses} pose={this.state.isVisible ? 'visible' : 'hidden'}>
                    Tired of using your phone calculator to keep track of your grocery trips?
                </SplitText>
                <br />
                <SplitText wordPoses={wordPoses} pose={this.state.isVisible ? 'visible' : 'hidden'}>
                    Tired of pressing the heckin' clear button and not remembering how much your cart is worth?
                </SplitText>
                <br />
                <SplitText wordPoses={wordPoses} pose={this.state.isVisible ? 'visible' : 'hidden'}>
                    Want to avoid the uncomfortable situation at the register of not knowing how much the bill will be?
                </SplitText>
                <br />
                <SplitText wordPoses={wordPoses} pose={this.state.isVisible ? 'visible' : 'hidden'}>
                    Want to keep better track of your grocery purchases and food habits ?
                </SplitText>
                <br />
                <br />
                <SplitText wordPoses={wordPoses} pose={this.state.isVisible ? 'visible' : 'hidden'}>
                    Cool! Us too! So we made this...For you!
                </SplitText>
                <br />
                <br />
                <SplitText wordPoses={wordPoses} pose={this.state.isVisible ? 'visible' : 'hidden'}>
                    And also because...if we accidentally press the clear button one more time...
                </SplitText>
                <br />
                <br />
                <SplitText wordPoses={wordPoses} pose={this.state.isVisible ? 'visible' : 'hidden'}>
                    WERE GOING TO SHOOT OURSELVES :D
                    </SplitText>


            </div >
        )
    }
}

export default IntroParagraph