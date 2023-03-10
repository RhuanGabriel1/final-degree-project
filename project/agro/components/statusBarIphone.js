import { StatusBar } from 'expo-status-bar';

export default function StatusBarIphone() {
    return(
        <StatusBar style={styleStatusBar.style}/>
    );
}

const styleStatusBar = StyleSheet.create({
    style: {
        backgroundColor: `green`,
    },
});  