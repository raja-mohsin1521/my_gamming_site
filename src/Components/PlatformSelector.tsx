import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../Interfaces/Platform";
import useGameQueryStore from "../store";

function PlatformSelector() {
  const { gameQuery, setPlatform } = useGameQueryStore();
  const { data, error } = usePlatform();

  
  const handleSelectPlatform = (platform: Platform) => {
    setPlatform(platform);
  };

  return (
    <>
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <Menu>
          <MenuButton
            as={Button}
            className="mt-3"
            rightIcon={<BsChevronDown />}
          >
            {gameQuery.platform ? gameQuery.platform.name : "Platforms"}
          </MenuButton>
          <MenuList>
            {data?.results.map((p) => (
              <MenuItem key={p.id} onClick={() => handleSelectPlatform(p)}>
                {p.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}
    </>
  );
}

export default PlatformSelector;
