import React, { Component } from 'react';
import {ScrollView, Text, View, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { REVIEWS } from '../shared/reviews';
import { MENUS } from '../shared/menus';

function RenderReviews({reviews}) {

    const renderReviewItem = ({item}) => {
        return(
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.text}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`}</Text>
            </View>
        );
    };

    return (
        <Card title='Reviews'>
            <FlatList
                data={reviews}
                renderItem={renderReviewItem}                
            />
        </Card>
    )
}

class Review extends Component {

    constructor(props) {
        super(props);    
        this.state = {
            reviews: REVIEWS
        };
    }
     
    static navigationOptions = {
        title: 'Review Us'
    };

    render() {
        const reviews = this.state.reviews;

        return (
            <ScrollView>
                <Card 
                    title="Leave Us A Review" 
                    image={require('../components/images/the-creative-exchange-d1ngW7SNehM-unsplash.jpg'
                    )}
                    wrapperStyle={{margin: 10}}>                    
                </Card>
                <RenderReviews reviews={reviews} />
            </ScrollView>
        );
    }
}

export default Review;


// This Works Below
// import React, { Component } from 'react';
// import {ScrollView } from 'react-native';
// import { Card } from 'react-native-elements';


// class Review extends Component {
     
//     static navigationOptions = {
//         title: 'Review Us'
//     };

//     render() {

//         return (
//             <ScrollView>
//                 <Card 
//                     title="Leave Us A Review" 
//                     image={require('../components/images/the-creative-exchange-d1ngW7SNehM-unsplash.jpg'
//                     )}
//                     wrapperStyle={{margin: 10}}>                    
//                 </Card>
//             </ScrollView>
//         );
//     }
// }

// export default Review;