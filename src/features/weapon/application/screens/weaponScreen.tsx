import { useEffect } from "react";
import { useWeapon } from "../providers/weaponProvider";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";

export const WeaponScreen = () => {
    const { state: { items }, dispatch, getWeapons } = useWeapon();
    useEffect(() => {
        getWeapons();
        console.log("Fetching weapons...");
        return () => {
            dispatch({ type: 'RESET' });
        };
    }, []);
    return (
        <Table selectionMode="multiple" isVirtualized isCompact isHeaderSticky>
            <TableHeader>
                <TableColumn>Arma</TableColumn>
            </TableHeader>
            <TableBody items={items} emptyContent="No weapons found">
                {item => (<TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                </TableRow>)}
            </TableBody>
        </Table>
    )
}