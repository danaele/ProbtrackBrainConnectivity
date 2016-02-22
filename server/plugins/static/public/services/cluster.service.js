angular.module('brainConnectivity')
.factory('clusterpost', function ($q, $http, $location) {
  return {
    getExecutionServers: function () {
      return $http({
        method: 'GET',
        url: '/clusterpost/executionserver'
        
      });
    },
    getJobStatus: function (id) {
      return $http({
        method: 'GET',
        url: '/clusterpost/executionserver/' + id
        
      });
    },
    submitJob: function (id) {
      return $http({
        method: 'POST',
        url: '/clusterpost/executionserver/' + id
      });
    },
    killJob: function (id) {
      return $http({
        method: 'DELETE',
        url: '/clusterpost/executionserver/' + id
        
      });
    },
    createJob: function(job){
      return $http({
        method: 'POST',
        url: '/clusterpost/dataprovider',
        data: job
        
      });
    },
    updateJob: function(job){
    	return $http({
        method: 'PUT',
        url: '/clusterpost/dataprovider',
        data: job
        
      });
    },
    getJob: function(id){
    	return $http({
        method: 'PUT',
        url: '/clusterpost/dataprovider/' + id,
        data: job
        
      });
    },
    getAttachment: function(id, filename){
    	return $http({
        method: 'GET',
        url: '/clusterpost/dataprovider/' + id + '/' + filename
        
      });
    },
    addAttachment: function(id, filename, data){
    	return $http({
        method: 'PUT',
        url: '/clusterpost/dataprovider/' + id + '/' + filename,
        data: data
        
      });
    },
    getJobUser: function(email, jobstatus, executable){
    	return $http({
        method: 'GET',
        url: '/clusterpost/dataprovider/user',
        data: {
        	userEmail: email, 
        	jobstatus: jobstatus,
        	executable: executable
        }
        
      });
    }
  }
});