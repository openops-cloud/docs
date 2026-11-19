targetScope = 'subscription'

@description('Scopes where this custom role can be assigned. Defaults to the current subscription.')
param assignableScopes array = [
  subscription().id
]

var roleDefinitionGuid = '97fd4ee5-cfe4-4d11-a798-2d9d8a4f153f'
var roleName = 'OpenOps Azure Benchmark Reader'
var roleDescription = 'Read-only benchmark, cost, and Azure Advisor recommendation role for OpenOps Azure Benchmark.'
var actions = [
  'Microsoft.Advisor/metadata/read'
  'Microsoft.Advisor/recommendations/read'
  'Microsoft.Billing/billingPeriods/read'
  'Microsoft.Billing/billingProperty/read'
  'Microsoft.Compute/disks/read'
  'Microsoft.Compute/images/read'
  'Microsoft.Compute/snapshots/read'
  'Microsoft.Compute/virtualMachines/read'
  'Microsoft.Consumption/*/read'
  'Microsoft.CostManagement/*/read'
  'Microsoft.CostManagement/query/action'
  'Microsoft.Insights/metrics/read'
  'Microsoft.Network/networkInterfaces/read'
  'Microsoft.Network/publicIPAddresses/read'
  'Microsoft.Resources/subscriptions/read'
  'Microsoft.Resources/subscriptions/resourceGroups/read'
  'Microsoft.Sql/servers/databases/read'
  'Microsoft.Sql/servers/elasticPools/read'
  'Microsoft.Sql/servers/read'
  'Microsoft.Web/hostingEnvironments/read'
  'Microsoft.Web/serverfarms/read'
  'Microsoft.Web/sites/read'
]

resource customRole 'Microsoft.Authorization/roleDefinitions@2022-04-01' = {
  name: roleDefinitionGuid
  properties: {
    roleName: roleName
    description: roleDescription
    type: 'CustomRole'
    permissions: [
      {
        actions: actions
        notActions: []
        dataActions: []
        notDataActions: []
      }
    ]
    assignableScopes: assignableScopes
  }
}

output roleDefinitionId string = roleDefinitionGuid
output roleDefinitionResourceId string = customRole.id
output roleDefinitionName string = customRole.properties.roleName
