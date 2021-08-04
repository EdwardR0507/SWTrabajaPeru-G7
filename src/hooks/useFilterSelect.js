import useLocations from "./useLocations";

export default function useFilterSelect(departamento, provincia) {
  const locations = useLocations();

  const [currentDep] = locations.departamentos.filter(
    (dep) => dep.name === departamento
  );

  const filteredProvincias =
    departamento &&
    locations.provincias.filter((prov) => prov.department_id === currentDep.id);

  const [currentProv] = locations.provincias.filter(
    (prov) => prov.name === provincia
  );

  const filteredDistritos =
    provincia &&
    locations.distritos.filter(
      (distrito) => distrito.province_id === currentProv.id
    );
  return [filteredProvincias, filteredDistritos];
}
