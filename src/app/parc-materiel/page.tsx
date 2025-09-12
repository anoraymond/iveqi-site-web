import { ParcMaterielClient } from './ParcMaterielClient'
import { getEquipment, getEquipmentFilters } from '@/lib/content'

export default async function ParcMaterielPage() {
  const [equipment, filterGroups] = await Promise.all([
    getEquipment(),
    getEquipmentFilters()
  ])

  return <ParcMaterielClient equipment={equipment} filterGroups={filterGroups} />
}
