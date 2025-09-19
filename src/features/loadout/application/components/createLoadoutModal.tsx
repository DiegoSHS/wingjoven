import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/react"
import { useState } from "react";

export const CreateLoadoutModal = ({
    isOpen,
    onOpenChange
}: {
    isOpen: boolean,
    onOpenChange: () => void
}) => {
    const [loadoutName, setLoadoutName] = useState<string>();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoadoutName(e.target.value)
        console.log(e.target.value);
    }
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
        >
            <ModalContent>
                {
                    (onClose) => (
                        <>
                            <ModalHeader>
                                Guardar la clase
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    placeholder="Nombre de la clase"
                                    value={loadoutName}
                                    onChange={handleChange}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    onPress={onClose}
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    onPress={onClose}
                                    color="primary"
                                    isDisabled={!loadoutName}
                                >
                                    Guardar
                                </Button>
                            </ModalFooter>
                        </>
                    )
                }
            </ModalContent>
        </Modal>
    )
}