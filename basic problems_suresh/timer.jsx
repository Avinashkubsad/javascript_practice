import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const App: React.FC = () => {
  const initialTime = 300;
  const [time, setTime] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)



  useEffect(() => {
    let timer: any;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => {
          if (prev > 0) {
            return prev - 1
          } else {
            setIsRunning(false)
            clearInterval(timer)
            return 0
          }
        })
      }, 1000);
    }
    return () => clearInterval(timer)

  }, [isRunning, time])

  const formatTime = (sec: number) => {
    let hr = Math.floor(sec / 3600);
    let min = Math.floor((sec % 3600) / 60)
    let second = sec % 60
    return hr.toString().padStart(2, '0') + ':' + min.toString().padStart(2, '0') + ':' + second.toString().padStart(2, '0')
  }
  const pauseTimer = () => {
    setIsRunning(false)
  }
  const resetTimer = () => {
    setIsRunning(false);
    setTime(initialTime)
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Timer Display */}
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{formatTime(time)}</Text>

        {/* Time Increase Buttons */}
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => addTime(30)} style={styles.timeButton}>
            <Text style={styles.buttonText}>+0:30</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addTime(60)} style={styles.timeButton}>
            <Text style={styles.buttonText}>+1:00</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addTime(300)} style={styles.timeButton}>
            <Text style={styles.buttonText}>+5:00</Text>
          </TouchableOpacity>
        </View> */}

        {/* Pause and Reset Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity onPress={pauseTimer} style={styles.timeButton}>
            <Text style={styles.buttonText}>Pause</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={resetTimer} style={styles.timeButton}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Play Button */}
      <TouchableOpacity onPress={() => setIsRunning(true)} style={styles.playButton}>
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    justifyContent: 'space-around',
    padding: 40,
    marginHorizontal: 'auto',
  },
  timerContainer: {
    alignItems: 'center',
  },
  timerText: {
    fontSize: 64,
    color: '#FFFFFF',
    fontWeight: '200',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  timeButton: {
    backgroundColor: '#333333',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  playButton: {
    backgroundColor: '#9BB3F7',
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
    marginBottom: 20
  },
});

export default App;