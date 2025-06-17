import { ApiClient, ApiResult } from "@/features/apiClient";
import { BaseItem } from "@/utils";
import { Autocomplete, AutocompleteItem } from "@heroui/react"
import { useAsyncList } from "@react-stately/data";
import { Key, useEffect, useState } from "react";

interface ExtendedItem extends BaseItem {
    name: string;
}

interface AutocompleteProps {
    name: string
    defaultSelectedItem: ExtendedItem
    route: string
}

export const AsyncAutocomplete = ({ name, defaultSelectedItem, route }: AutocompleteProps) => {

    const [selectedKey, setSelectedKey] = useState<Key>(defaultSelectedItem?.id as Key);
    const onSelectionChange = (key: Key | null) => {
        if (key) setSelectedKey(key)
    }
    const attachmentList = useAsyncList<ExtendedItem>({
        async load({ signal, filterText }) {
            if (filterText === "") return {
                items: [],
            }
            const { data: { data } } = await ApiClient.get<ApiResult<ExtendedItem[]>>(route, {
                params: {
                    name: filterText,
                },
                signal,
            });
            return {
                items: data,
            };
        },
    });
    useEffect(() => {
        if (defaultSelectedItem) {
            attachmentList.setFilterText(defaultSelectedItem.name);
        }
        return () => {
            attachmentList.setFilterText("");
        };
    }, [defaultSelectedItem]);
    return (
        <Autocomplete
            label={name}
            inputValue={attachmentList.filterText}
            isLoading={attachmentList.isLoading}
            onInputChange={attachmentList.setFilterText}
            defaultItems={attachmentList.items}
            selectedKey={selectedKey as string}
            onSelectionChange={onSelectionChange}
            listboxProps={{
                emptyContent: 'No attachments found',
            }}
        >
            {
                (attachment) => (
                    <AutocompleteItem key={attachment.id}>
                        {
                            attachment.name
                        }
                    </AutocompleteItem>
                )
            }
        </Autocomplete>
    )
}