import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

//TODO: Datepicker pour les dates mais non utilisé a cause du format de la date côté back
class DateTime extends React.Component {
    render() {

        const dateprops = this.props.date
        const [date, setDate] = useState(dateprops);
        const [mode, setMode] = useState('date');
        const [show, setShow] = useState(false);

        const onChange = (event, selectedDate) => {
            const currentDate = selectedDate || date;
            setShow(Platform.OS === 'ios');
            setDate(currentDate);
        };

        const showMode = currentMode => {
            setShow(true);
            setMode(currentMode);
        };

        const showDatepicker = () => {
            showMode('date');
        };

        return (
            <View>
                <View>
                    <Button onPress={showDatepicker} title="Show date picker!"/>
                </View>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </View>
        );
    }
};

export default DateTime;
