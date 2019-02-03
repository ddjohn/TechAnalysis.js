pipeline {
  agent any
	
  environment {
    ANDROID_HOME = '/var/lib/jenkins/Android/Sdk' 
  }

  stages {
    stage('Clean') {
      steps {
        echo 'Cleaning...'
        sh "android-launcher/palingenesis clean"
        sh   "android-ikaros/palingenesis clean"
      }
    }
    stage('Build') {
      steps {
        echo 'Building...'
        sh "android-launcher/palingenesis build"
        sh   "android-ikaros/palingenesis build"
      }
    }
    stage('Test') {
      steps {
        echo 'Testing...'
        sh "android-launcher/palingenesis test"
        sh   "android-ikaros/palingenesis test"
      }
    }
    stage('Analysis') {
      steps {
        echo 'Analysis...'
        sh "android-launcher/palingenesis analysis"
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying...'
        sh "android-launcher/palingenesis deploy"
        sh   "android-ikaros/palingenesis deploy"
      }
    }
  }
}