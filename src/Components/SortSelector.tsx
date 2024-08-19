import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";
import { Sort } from "../Interfaces/Sort";

function SortSelector() {
  const { gameQuery, setSort } = useGameQueryStore();

  const data: Sort[] = [
    { id: 1, name: "Name", slug: "-name" },
    { id: 2, name: "Released Date", slug: "-released" },
    { id: 3, name: "Added Date", slug: "-added" },
    { id: 4, name: "Created Date", slug: "-created" },
    { id: 5, name: "Updated Date", slug: "-updated" },
    { id: 6, name: "Rating", slug: "-rating" },
    { id: 7, name: "Metacritic Score", slug: "-metacritic" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} className="mt-3" rightIcon={<BsChevronDown />}>
        {gameQuery.sort ? gameQuery.sort.name : "Sort By"}
      </MenuButton>
      <MenuList>
        {data.map((s) => (
          <MenuItem key={s.id} onClick={() => setSort(s)}>
            {s.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
