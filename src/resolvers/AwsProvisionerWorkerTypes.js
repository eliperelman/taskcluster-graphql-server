export default {
  AwsProvisionerWorkerType: {
    state({ workerType }, args, { loaders }) {
      return loaders.awsProvisionerWorkerTypeState.load(workerType);
    },
  },
  AwsProvisionerErrorType: {
    INSTANCE_REQUEST: 'instance-request',
    TERMINATION: 'termination',
  },
  Query: {
    awsProvisionerWorkerType(parent, { workerType }, { loaders }) {
      return loaders.awsProvisionerWorkerType.load(workerType);
    },
    awsProvisionerWorkerTypeState(parent, { workerType }, { loaders }) {
      return loaders.awsProvisionerWorkerTypeState.load(workerType);
    },
    awsProvisionerWorkerTypeSummaries(parent, { filter }, { loaders }) {
      return loaders.awsProvisionerWorkerTypeSummaries.load({ filter });
    },
    awsProvisionerRecentErrors(parent, { filter }, { loaders }) {
      return loaders.awsProvisionerRecentErrors.load({ filter });
    },
    awsProvisionerHealth(parent, { filter }, { loaders }) {
      return loaders.awsProvisionerHealth.load({ filter });
    },
  },
  Mutation: {
    createAwsProvisionerWorkerType(
      parent,
      { workerType, payload },
      { clients }
    ) {
      return clients.awsProvisioner.createWorkerType(workerType, payload);
    },
    updateAwsProvisionerWorkerType(
      parent,
      { workerType, payload },
      { clients }
    ) {
      return clients.awsProvisioner.updateWorkerType(workerType, payload);
    },
    async deleteAwsProvisionerWorkerType(parent, { workerType }, { clients }) {
      await clients.awsProvisioner.removeWorkerType(workerType);

      return workerType;
    },
  },
};
